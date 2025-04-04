import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';

import Button from '@components/Button';

import { axiosRemoveData } from '@utils/axios';

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

const Table = ({ data }) => {
    const queryClient = useQueryClient();
    const captions = useMemo(() => {
        return data
            ? [
                  ...Object.keys(data[0])
                      .slice(1, -2)
                      .map((i) => i.slice(0, 1).toUpperCase() + i.slice(1)),
                  'Actions',
              ]
            : [];
    }, [data]);

    const isMobile = useMediaQuery({
        query: '(min-width: 320px)',
    });
    const isTablet = useMediaQuery({
        query: '(min-width: 1024px)',
    });
    const isComputer = useMediaQuery({
        query: '(min-width: 1280px)',
    });

    const clipText = (str) => {
        if (isComputer && str.length > 550) return str.slice(0, 550) + '...';
        if (isTablet && str.length > 350) return str.slice(0, 350) + '...';
        else if (isMobile && str.length > 100) {
            return str.slice(0, 100) + '...';
        } else return str;
    };

    const removeBlog = (id) => {
        mutateRemoveBlog.mutate({ title: 'blog', id });
    };

    const mutateRemoveBlog = useMutation({
        mutationFn: ({ title, id }) =>
            axiosRemoveData({ title, id, role: 'user' }),
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries(['blogs']);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return (
        <>
            <div className="pb-6 text-center text-xl uppercase">Blogs</div>
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
                            <tr
                                key={d._id}
                                className="grid gap-4 border-b border-gray-700 py-2 last:border-0 xl:table-row"
                            >
                                {captions
                                    .filter(
                                        (caption) =>
                                            caption !== 'Actions' &&
                                            caption !== 'Image',
                                    )
                                    .map((caption, i) => {
                                        return (
                                            <Td key={i} title={caption}>
                                                {clipText(
                                                    d[
                                                        caption.toLocaleLowerCase()
                                                    ],
                                                )}
                                            </Td>
                                        );
                                    })}

                                <Td title="Image">
                                    <img
                                        src={d.image}
                                        className="max-w-24"
                                        alt=""
                                    />
                                </Td>
                                <Td title="Actions">
                                    <Button type="button" className="px-4 py-2">
                                        Edit
                                    </Button>
                                    <Button
                                        onClick={() => removeBlog(d._id)}
                                        type="button"
                                        className="px-4 py-2"
                                    >
                                        Delete
                                    </Button>
                                </Td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;
