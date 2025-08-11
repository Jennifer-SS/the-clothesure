import './form.styles.css';
import { setValueMetric } from '../../analytics/analytics.page';
import { toast } from 'react-toastify';

export const Form = ({ refEmailSent, setViewModal }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        if (refEmailSent.current) {
            toast.info("Ya te haz registrado");
            setViewModal(false);
        } else {
            setValueMetric(refEmailSent, 'counterEmailSent');
            setViewModal(false);
            toast.success("¡Correo almacenado!");
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__data">
                <label htmlFor="email" className='form__data--label'>Ingresa tu correo</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="correo@gmail.com"
                    autoComplete="email"
                    required
                    className='field__email'
                />
            </div>
            <button type="submit" className='form__btn'>Almacenar</button>
        </form>
    );
}