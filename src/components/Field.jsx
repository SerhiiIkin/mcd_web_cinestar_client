import { useState } from 'react';
import { PiEyesFill } from 'react-icons/pi';

import { ErrorMessage, Field as TextField } from 'formik';

import { classes } from '@utils/classes';

const Field = ({ field, classNameLabel, classNameInput, classNameError }) => {
    const [type, setType] = useState(true);
    return (
        <label
            className={classes([
                'relative grid gap-2 pb-6 text-center',
                classNameLabel,
            ])}
        >
            <TextField
                as={field.fieldsType}
                className={classes([
                    'border-ninth w-full border-b border-l p-3',
                    classNameInput,
                ])}
                label={field.placeholder}
                placeholder={field.placeholder}
                name={field.name}
                type={type ? field.type : 'text'}
                rows={field.rows}
            />
            {field.type === 'password' && (
                <button
                    type="button"
                    className="absolute top-1/4 right-2 -translate-y-1/3"
                    onClick={() => setType((prev) => !prev)}
                >
                    {type ? (
                        <PiEyesFill className="h-8 w-8" />
                    ) : (
                        <PiEyesFill className="h-8 w-8 rotate-180" />
                    )}
                </button>
            )}
            <ErrorMessage
                component="div"
                name={field.name}
                className={classes([
                    'absolute bottom-0 left-2 text-xs text-red-400',
                    classNameError,
                ])}
            />
        </label>
    );
};

export default Field;
