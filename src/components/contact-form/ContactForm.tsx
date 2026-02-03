'use client';
import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
      <h3>{t('contact.header')}</h3>
      <p>{t('contact.text')}</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.row}>
          {' '}
          <input
            placeholder={t('contact.name')}
            {...register('name', {
              required: t('contact.errors.nameRequired'),
            })}
          />
          <input
            placeholder={t('contact.surname')}
            {...register('surname', {
              required: t('contact.errors.surnameRequired'),
            })}
          />
        </div>
        {errors.name && <span>{errors.name.message}</span>}
        {errors.surname && <span>{errors.surname.message}</span>}
        <div className={styles.row}>
          <input
            placeholder='Email'
            type='email'
            {...register('email', {
              required: t('contact.errors.emailRequired'),
              pattern: {
                value: /^\S+@\S+$/i,
                message: t('contact.errors.emailInvalid'),
              },
            })}
          />

          <input
            placeholder={t('contact.mesTitle')}
            {...register('title', {
              required: t('contact.errors.titleRequired'),
            })}
          />
        </div>
        {errors.email && <span>{errors.email.message}</span>}
        {errors.title && <span>{errors.title.message}</span>}

        <textarea
          placeholder={t('contact.message')}
          rows={5}
          {...register('message', {
            required: t('contact.errors.messageRequired'),
            minLength: {
              value: 10,
              message: t('contact.errors.messageMin'),
            },
          })}
        />
        {errors.message && <span>{errors.message.message}</span>}

        <Button className={styles.btn} type='submit'>
          {t('contact.button')}
        </Button>
        {success && <p className='success'>Message sent successfully!</p>}
      </form>
    </div>
  );
};
