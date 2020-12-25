import React from 'react';
import { Form, Field } from 'react-final-form';
import clsx from 'clsx';
import { composeValidators, isRequired } from '../../libs/validations';
import { Loading } from '../Loading';
import styles from './index.module.scss';
import { Overlay } from '../Overlay';
import { Optional } from '../Badge/Optional';
import { Required } from '../Badge/Required';
import { Task } from '../../redux/modules/task';
import { Project } from '../../redux/modules/project';

const onSubmit = (values: any) => console.log(values);
type Props = {
  initialValues: Task;
  projects: Project[];
  closeTaskModal: () => void;
};
export const TaskForm: React.VFC<Props> = ({
  initialValues,
  projects,
  closeTaskModal,
}) => (
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
        initialValues={initialValues}
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
                    name="projectId"
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
                    {projects.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.title}
                      </option>
                    ))}
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
                name="dueDate"
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
                      <label htmlFor="task_dueDate" className={styles.label}>
                        Due date
                      </label>
                      <Required />
                    </div>
                    <input
                      id="task_dueDate"
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
                  name="description"
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
