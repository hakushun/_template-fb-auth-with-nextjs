import React from 'react';
import { Form, Field } from 'react-final-form';
import clsx from 'clsx';
import { composeValidators, isRequired } from '../../libs/validations';
import { Loading } from '../Loading';
import styles from './index.module.scss';
import { Overlay } from '../Overlay';
import { Optional } from '../Badge/Optional';
import { Required } from '../Badge/Required';

const onSubmit = (values: any) => console.log(values);
type Props = {
  closeTaskModal: () => void;
};
export const TaskForm: React.VFC<Props> = ({ closeTaskModal }) => (
  <Overlay>
    <section className={styles.root}>
      <button
        type="button"
        aria-label="閉じる"
        className={styles.close}
        onClick={() => closeTaskModal()}>
        <img src="/images/icon-x.svg" alt="閉じる" width="40" height="40" />
      </button>
      <Form
        onSubmit={onSubmit}
        subscription={{ submitting: true }}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <fieldset>
              <legend>
                <h2 className={styles.title}>Task Form</h2>
              </legend>
              <div className={styles.inputWrapper}>
                <div className={styles.labelWrapper}>
                  <label htmlFor="task_project" className={styles.label}>
                    Project
                  </label>
                  <Required />
                </div>
                <div className={styles.selectboxWrapper}>
                  <Field
                    name="project"
                    id="task_project"
                    component="select"
                    validate={composeValidators(isRequired)}
                    className={styles.selectbox}
                    subscription={{
                      value: true,
                      active: true,
                      error: true,
                      touched: true,
                    }}>
                    <option value="">Choose a Project</option>
                    <option value="1">Project1</option>
                    <option value="2">Project2</option>
                    <option value="3">Project3</option>
                  </Field>
                </div>
              </div>
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
                      <label htmlFor="task_title" className={styles.label}>
                        Title
                      </label>
                      <Required />
                    </div>
                    <input
                      id="task_title"
                      type="text"
                      placeholder="Task Title"
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
                      <label htmlFor="task_duedate" className={styles.label}>
                        Due date
                      </label>
                      <Required />
                    </div>
                    <input
                      id="task_duedate"
                      type="date"
                      placeholder="Task Due date"
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
                  <label htmlFor="task_description" className={styles.label}>
                    Description
                  </label>
                  <Optional />
                </div>
                <Field
                  name="overview"
                  component="textarea"
                  id="task_description"
                  placeholder="Task Description"
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
