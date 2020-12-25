import React from 'react';
import { Form, Field } from 'react-final-form';
import clsx from 'clsx';
import { composeValidators, isRequired } from '../../libs/validations';
import { Loading } from '../Loading';
import styles from './index.module.scss';
import { Overlay } from '../Overlay';
import { Required } from '../Badge/Required';

const onSubmit = (values: any) => console.log(values);
type Props = {
  closeActivityModal: () => void;
};
export const ActivityForm: React.VFC<Props> = ({ closeActivityModal }) => (
  <Overlay>
    <section className={styles.root}>
      <button
        type="button"
        aria-label="閉じる"
        className={styles.close}
        onClick={() => closeActivityModal()}>
        <img src="/images/icon-x.svg" alt="閉じる" width="40" height="40" />
      </button>
      <Form
        onSubmit={onSubmit}
        subscription={{ submitting: true }}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <fieldset>
              <legend>
                <h2 className={styles.title}>Activity Form</h2>
              </legend>
              <Field
                name="comment"
                component="textarea"
                validate={composeValidators(isRequired)}
                subscription={{
                  value: true,
                  active: true,
                  error: true,
                  touched: true,
                }}>
                {({ textarea, meta }) => (
                  <div className={styles.inputWrapper}>
                    <div className={styles.labelWrapper}>
                      <label
                        htmlFor="activity_comment"
                        className={styles.label}>
                        Comment
                      </label>
                      <Required />
                    </div>
                    <textarea
                      id="activity_comment"
                      placeholder="Comment"
                      className={clsx(
                        styles.textarea,
                        meta.touched && meta.error && styles.hasError,
                      )}
                      disabled={submitting}
                      maxLength="3000"
                      {...textarea}
                    />
                  </div>
                )}
              </Field>
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
