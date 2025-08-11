import { Dialog } from '@headlessui/react'
import { Form } from '../form/Form'
import './modal.styles.css'

export const Modal = ({ refEmailSent, viewModal, setViewModal }) => {
    return (
        <Dialog open={viewModal} onClose={() => setViewModal(false)} className="dialog-backdrop">
            <Dialog.Panel className="dialog-panel">
                <Dialog.Title className="dialog-title">¡No te pierdas nada!</Dialog.Title>
                <Dialog.Description className="dialog-description">
                    Déjanos tu correo para avisarte cuando The Clothesure esté listo.
                </Dialog.Description>
                <Form refEmailSent={refEmailSent} setViewModal={setViewModal} />
            </Dialog.Panel>
        </Dialog>
    )
}
