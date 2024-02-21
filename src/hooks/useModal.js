import React, {useCallback, useContext, useState} from 'react';
import ConfirmModal from '../modals/ConfirmModal';
import RegistrationModal from '../modals/RegistrationModal';
import LoginModal from '../modals/LoginModal';

const ModalContext = React.createContext();
ModalContext.displayName = 'ModalContext';

export const MODALS = {
    'NONE': 'NONE',
    'CONFIRM_DELETE': 'CONFIRM_DELETE',
    'LOGIN': 'LOGIN',
    'REG': 'REG',
};

/* eslint-disable default-case */
export function Modals() {
    return (
        <ModalContext.Consumer>
            {(context) => {
                const onClose = () => context.showModal(MODALS.NONE);
                switch (context.currentModal) {
                    case MODALS.NONE:
                        return null;
                    case MODALS.LOGIN:
                        return <LoginModal onClose={onClose}/>;
                    case MODALS.REG:
                        return <RegistrationModal onClose={onClose}/>;
                    case MODALS.CONFIRM_DELETE:
                        return <ConfirmModal onClose={onClose}/>;
                }
            }}
        </ModalContext.Consumer>
    )
}

export function ModalContextProvider({children}) {
    const [currentModal, setCurrentModal] = useState(false);
    const showModal = useCallback(
        (newModal) => {
            setCurrentModal(newModal);
        },
        [setCurrentModal]
    );

    return (
        <ModalContext.Provider value={{currentModal, showModal}}>
            {children}
            <Modals/>
        </ModalContext.Provider>
    )
}

export function useModals() {
    return useContext(ModalContext);
}