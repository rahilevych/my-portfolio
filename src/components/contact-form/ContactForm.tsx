'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useForm } from 'react-hook-form';
import { Button } from '@/shared/logo/button/Button';
import emailjs from '@emailjs/browser';

interface IFormData {
  name: string;
  surname: string;
  email: string;
  title: string;
  message: string;
}
export const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => {
    const templateParams: Record<string, unknown> = {
      name: data.name,
      surname: data.surname,
      email: data.email,
      title: data.title,
      message: data.message,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(() => {
        setSuccess(true);
        reset();
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch(() => {
        alert('Failed to send message');
      });
  };
  return (
    <div className={styles.content}>
      <h3>Let&apos;s work together</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
        excepturi ullam exercitationem sit necessitatibus sint eos porro
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.row}>
          {' '}
          <input
            placeholder='Name'
            {...register('name', { required: 'Name is required' })}
          />
          <input
            placeholder='Surname'
            {...register('surname', { required: 'Surname is required' })}
          />
        </div>
        {errors.name && <span>{errors.name.message}</span>}
        {errors.surname && <span>{errors.surname.message}</span>}
        <div className={styles.row}>
          <input
            placeholder='Email'
            type='email'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
          />

          <input
            placeholder='Title'
            {...register('title', { required: 'Title is required' })}
          />
        </div>
        {errors.email && <span>{errors.email.message}</span>}
        {errors.title && <span>{errors.title.message}</span>}

        <textarea
          placeholder='Your message'
          rows={5}
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Minimum 10 characters',
            },
          })}
        />
        {errors.message && <span>{errors.message.message}</span>}

        <Button className={styles.btn} type='submit'>
          Send message
        </Button>
        {success && <p className='success'>Message sent successfully!</p>}
      </form>
    </div>
  );
};
