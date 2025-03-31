const ModalLayout = ({
    children,
    backdropRef,
    contentModalRef,
    changeModalState,
}) => {
    return (
        <div
            ref={contentModalRef}
            className="fixed inset-0 z-40 hidden place-items-center"
        >
            {children}
            <button
                onClick={changeModalState}
                className="absolute top-2 right-2"
            >
                <CloseSvg />
            </button>
            <div
                title="close modal"
                className="absolute inset-0 -z-20 cursor-pointer bg-[url(modalBackground.png)] bg-cover bg-center"
            ></div>
            <div
                ref={backdropRef}
                title="close modal"
                onClick={changeModalState}
                className="absolute inset-0 -z-10 cursor-pointer bg-white"
            ></div>
        </div>
    );
};

export default ModalLayout;

const CloseSvg = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
    >
        <g clipath="url(#clip0_38_625)">
            <path
                d="M60.1667 20.2984L55.7017 15.8334L38 33.535L20.2984 15.8334L15.8334 20.2984L33.535 38L15.8334 55.7017L20.2984 60.1667L38 42.465L55.7017 60.1667L60.1667 55.7017L42.465 38L60.1667 20.2984Z"
                fill="white"
            />
        </g>
        <defs>
            <clipPath id="clip0_38_625">
                <rect width="76" height="76" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
