import { contactInfoData } from '@constants/constants';

const ContactInfo = () => {
    return (
        <ul className="grid gap-4 pb-4">
            {contactInfoData().map(({ svg, href, name, id }) => (
                <li key={id} className="flex items-center gap-x-4 py-3">
                    {svg}
                    <a href={href}> {name} </a>
                </li>
            ))}
        </ul>
    );
};

export default ContactInfo;
