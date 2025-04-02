import { ErrorMessage, Field as TextField } from 'formik';

import { classes } from '@utils/classes';

const Field = ({ field, classNameLabel }) => (
    <label
        className={classes([
            'relative grid gap-2 pb-6 text-center',
            classNameLabel,
        ])}
    >
        <TextField
            as={field.fieldsType}
            className="w-full border-b border-l p-3 border-ninth"
            label={field.placeholder}
            placeholder={field.placeholder}
            name={field.name}
            type={field.type}
            rows={field.rows}
        />
        <ErrorMessage
            component="div"
            name={field.name}
            className="absolute bottom-0 left-2 text-xs text-red-500"
        />
    </label>
);

export default Field;
