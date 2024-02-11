import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AuthState {
    isAuthorized: boolean;
    setIsAuthorized: (bool: boolean) => void;
}

export const useGoodyStore = create<AuthState>()(
    devtools(
        persist(
            (set) => ({
                isAuthorized: false,
                setIsAuthorized: (bool) =>
                    set((state) => ({
                        isAuthorized: (state.isAuthorized = bool),
                    })),
            }),
            { name: 'authStore' }
        )
    )
);
