import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ModalState {
    isAddKidOpen: boolean;
    setIsAddKidOpen: (bool: boolean) => void;
}

export const useModalStore = create<ModalState>()(
    devtools(
        persist(
            (set) => ({
                isAddKidOpen: false,
                setIsAddKidOpen: (bool) =>
                    set((state) => ({
                        isAddKidOpen: (state.isAddKidOpen = bool),
                    })),
            }),
            { name: 'modalStore' }
        )
    )
);
