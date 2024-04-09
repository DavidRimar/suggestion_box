import React, {useCallback, useContext, useState} from 'react';
import ConfirmModal from '../modals/ConfirmModal';
import RegistrationModal from '../modals/RegistrationModal';
import LoginModal from '../modals/LoginModal';
import ErrorModal from '../modals/ErrorModal';

const ModalContext = React.createContext();
ModalContext.displayName = 'ModalContext';

export const MODALS = {
    'NONE': 'NONE',
    'CONFIRM_DELETE': 'CONFIRM_DELETE',
    'LOGIN': 'LOGIN',
    'REG': 'REG',
    'ERROR': 'ERROR'
};

export function Modals() {
    return (
        <ModalContext.Consumer>
            {(context) => {
                const onClose = () => context.showModal(MODALS.NONE);
                switch (context.currentModal) {
                    case MODALS.NONE:
                        return null;
                    case MODALS.LOGIN:
                        return <LoginModal onClose={onClose} {...context.modalProps}/>;
                    case MODALS.REG:
                        return <RegistrationModal onClose={onClose} {...context.modalProps}/>;
                    case MODALS.CONFIRM_DELETE:
                        return <ConfirmModal onClose={onClose} {...context.modalProps}/>;
                    case MODALS.ERROR:
                        return <ErrorModal onClose={onClose} {...context.modalProps}/>;
                    default:
                        return null;
                }
            }}
        </ModalContext.Consumer>
    )
}

export function ModalContextProvider({children}) {
    const [currentModal, setCurrentModal] = useState(false);
    const [modalProps, setModalProps] = useState({});
    const showModal = useCallback(
        (newModal, newModalProps = {}) => {
            setModalProps(newModalProps);
            setCurrentModal(newModal);
        },
        [setCurrentModal, setModalProps]
    );

    return (
        <ModalContext.Provider value={{currentModal, showModal, modalProps}}>
            {children}
            <Modals/>
        </ModalContext.Provider>
    )
}

export function useModals() {
    return useContext(ModalContext);
}