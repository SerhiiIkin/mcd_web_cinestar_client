import Skeleton from 'react-loading-skeleton';

import { classes } from '@utils/classes';

const DataHandleLayout = ({
    data,
    children,
    className,
    SkeletonCount = 5,
    containerClassNameSkeleton,
    emptyText = 'No data available',
}) => {
    const classNamesAll = 'py-5 md:py-7 xl:py-9';

    if (data.error) {
        return (
            <div
                className={classes([
                    classNamesAll,
                    'text-center text-red-500',
                    className ?? '',
                ])}
            >
                {data.error}
            </div>
        );
    }
    if (data?.data?.length === 0 && !data.isLoading && !data.error) {
        return (
            <div className={classes([classNamesAll, '', className ?? ''])}>
                {emptyText}
            </div>
        );
    }

    if (data.isLoading) {
        return (
            <div className={classes([classNamesAll, '', className ?? ''])}>
                <Skeleton
                    containerClassName={containerClassNameSkeleton}
                    count={SkeletonCount}
                />
            </div>
        );
    }

    return (
        < >
            {children}
        </>
    );
};

export default DataHandleLayout;
