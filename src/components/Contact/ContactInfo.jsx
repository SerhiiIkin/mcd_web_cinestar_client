import { contactInfoData } from '@constants/constants';

const ContactInfo = () => {
    return (
        <ul className="relative z-10 grid gap-4 pb-4">
            {contactInfoData().map(({ svg, href, name, id }) => (
                <li key={id} className="group flex items-center gap-x-4 py-3">
                    {svg}
                    <a
                        href={href}
                        className="xl:hover:text-secondary duration-700"
                    >
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default ContactInfo;
