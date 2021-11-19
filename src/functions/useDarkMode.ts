import {Ref, ref} from "vue";


// @ts-ignore
export default function useDarkMode(): { darkMode: Ref<string>, changeMode: () => void } {
    //Basic constant to define if darkmode is enabled or not
    /** Reference to the darkmode value */
    const darkMode: Ref<string> = ref<string>(localStorage.theme === 'dark' ? 'dark': '')

    /**
     * Change the mode theme
     */
    const changeMode = (): void  => {
        if (darkMode.value === 'dark') {
            document.documentElement.classList.remove('dark')
            darkMode.value = 'light'
            localStorage.theme = 'light'
        } else {
            document.documentElement.classList.add('dark')
            darkMode.value = 'dark'
            localStorage.theme = 'dark'
        }
    }

    return {
        darkMode,
        changeMode
    }
}
