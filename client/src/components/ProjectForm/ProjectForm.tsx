import React from 'react';
import { Form, Field } from 'react-final-form';
import clsx from 'clsx';
import { composeValidators, isRequired } from '../../libs/validations';
import { Loading } from '../Loading';
import styles from './index.module.scss';
import { Overlay } from '../Overlay';
import { Optional } from '../Badge/Optional';
import { Required } from '../Badge/Required';

const onSubmit = (values) => console.log(values);
type Props = {
  toggleProjectModal: () => void;
};
export const ProjectForm: React.VFC<Props> = ({ toggleProjectModal }) => (
  <Overlay>
    <section className={styles.root}>
      <button
        type="button"
        aria-label="閉じる"
        className={styles.close}
        onClick={() => toggleProjectModal()}>
        <img src="/images/icon-x.svg" alt="閉じる" width="40" height="40" />
      </button>
      <Form
        onSubmit={onSubmit}
        subscription={{ submitting: true }}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <fieldset>
              <legend>
                <h2 className={styles.title}>Project Form</h2>
              </legend>
              <Field
                name="title"
                validate={composeValidators(isRequired)}
                subscription={{
                  value: true,
                  active: true,
                  error: true,
                  touched: true,
                }}>
                {({ input, meta }) => (
                  <div className={styles.inputWrapper}>
                    <div className={styles.labelWrapper}>
                      <label htmlFor="project_title" className={styles.label}>
                        Title
                      </label>
                      <Required />
                    </div>
                    <input
                      id="project_title"
                      type="text"
                      placeholder="Project Title"
                      disabled={submitting}
                      maxLength={100}
                      className={clsx(
                        styles.input,
                        meta.touched && meta.error && styles.hasError,
                      )}
                      {...input}
                    />
                  </div>
                )}
              </Field>
              <Field
                name="duedate"
                validate={composeValidators(isRequired)}
                subscription={{
                  value: true,
                  active: true,
                  error: true,
                  touched: true,
                }}>
                {({ input, meta }) => (
                  <div className={styles.inputWrapper}>
                    <div className={styles.labelWrapper}>
                      <label htmlFor="project_duedate" className={styles.label}>
                        Due date
                      </label>
                      <Required />
                    </div>
                    <input
                      id="project_duedate"
                      type="date"
                      placeholder="Project Due date"
                      disabled={submitting}
                      className={clsx(
                        styles.input,
                        meta.touched && meta.error && styles.hasError,
                      )}
                      {...input}
                    />
                  </div>
                )}
              </Field>
              <div className={styles.inputWrapper}>
                <div className={styles.labelWrapper}>
                  <label htmlFor="project_overview" className={styles.label}>
                    Overview
                  </label>
                  <Optional />
                </div>
                <Field
                  name="overview"
                  component="textarea"
                  id="project_overview"
                  placeholder="Project Overview"
                  disabled={submitting}
                  className={styles.textarea}
                  maxLength="3000"
                  subscription={{
                    value: true,
                    active: true,
                    error: true,
                    touched: true,
                  }}></Field>
              </div>
            </fieldset>
            <div className={styles.actionWrapper}>
              {submitting ? (
                <Loading />
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className={styles.action}>
                  submit
                </button>
              )}
            </div>
          </form>
        )}
      />
    </section>
  </Overlay>
);
