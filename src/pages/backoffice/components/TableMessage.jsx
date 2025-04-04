import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { axiosUpdateData } from '@utils/axios';

const Td = ({ title, children }) => (
    <td className="grid grid-cols-7 gap-1 p-1 text-left xl:table-cell xl:border-0 xl:p-2">
        <span className="col-span-2 inline break-words md:col-span-1 xl:hidden">
            {title}
        </span>
        <span className="col-span-5 flex gap-2 font-bold capitalize md:col-span-6 xl:inline-flex">
            {children}
        </span>
    </td>
);

const Th = ({ children }) => (
    <th className="p-2 text-left break-words capitalize"> {children}</th>
);

const Tr = ({ d, captions }) => {
    const [checked, setChecked] = useState(d.status);

    const queryClient = useQueryClient();

    const changeStatusInput = (event) => {
        const checked = event.target.checked;
        setChecked(checked);
        const formData = { ...d, status: checked, id: d._id };
        mutateUpdateStatus.mutate(formData);
    };

    const mutateUpdateStatus = useMutation({
        mutationFn: (formData) =>
            axiosUpdateData({ title: 'message', role: 'admin', formData }),
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries(['messages']);
        },
    });

    return (
        <tr className="grid gap-4 border-b border-gray-700 py-2 last:border-0 xl:table-row">
            {captions.map((caption, i) => {
                if (caption === 'Status') {
                    return (
                        <Td key={i} title={caption}>
                            <label htmlFor={`status${i}`}>
                                <input
                                    checked={checked}
                                    onChange={changeStatusInput}
                                    type="checkbox"
                                    id={`status${i}`}
                                    className=""
                                />
                            </label>
                            {d.status ? 'Read ' : 'Not Read'}
                        </Td>
                    );
                }
                return (
                    <Td key={i} title={caption}>
                        {d[caption.toLocaleLowerCase()]}
                    </Td>
                );
            })}
        </tr>
    );
};

const Table = ({ data, actions, title }) => {
    const captions = useMemo(() => {
        return data
            ? [
                  ...Object.keys(data[0])
                      .slice(1, -2)
                      .map((i) => i.slice(0, 1).toUpperCase() + i.slice(1)),
                  ...(actions ? ['Actions'] : []),
              ]
            : [];
    }, [data]);

    return (
        <div className="text-primary rounded-lg bg-gray-800 p-2 md:p-4 xl:p-6">
            <div className="pb-6 text-center text-xl uppercase">{title}</div>
            <table className="w-full">
                <thead className="hidden xl:table-header-group">
                    <tr>
                        {captions.map((caption, i) => (
                            <Th key={i}> {caption} </Th>
                        ))}
                    </tr>
                </thead>
                <tbody className="grid gap-4 text-xs xl:table-row-group">
                    {data &&
                        data.map((d) => (
                            <Tr
                                key={d._id}
                                d={d}
                                captions={captions}
                                actions={actions}
                            />
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
