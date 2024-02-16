import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ModalState {
    isAddKidOpen: boolean;
    isGameOpen: boolean;
    setIsAddKidOpen: (bool: boolean) => void;
    setIsGameOpen: (bool: boolean) => void;
}

export const useModalStore = create<ModalState>()(
    devtools(
        persist(
            (set) => ({
                isAddKidOpen: false,
                isGameOpen: false,
                setIsAddKidOpen: (bool) =>
                    set((state) => ({
                        isAddKidOpen: (state.isAddKidOpen = bool),
                    })),
                setIsGameOpen: (bool) => set((state) => ({ isGameOpen: bool })),
            }),
            { name: 'modalStore' }
        )
    )
);
