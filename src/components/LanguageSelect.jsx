import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'bg', name: 'Български', flag: '🇧🇬' },
    { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
    { code: 'da', name: 'Dansk', flag: '🇩🇰' },
    { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'no', name: 'Norsk', flag: '🇳🇴' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ro', name: 'Română', flag: '🇷🇴' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
    { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
];

export default function LanguageSelect() {
    const { i18n, t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const rootRef = useRef(null);

    const currentLang =
        languages.find((l) => l.code === i18n.resolvedLanguage) || languages[0];

    const changeLang = (code) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    // click outside + ESC close
    useEffect(() => {
        const onClick = (e) => {
            if (!rootRef.current?.contains(e.target)) setOpen(false);
        };
        const onEsc = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('mousedown', onClick);
        document.addEventListener('keydown', onEsc);
        return () => {
            document.removeEventListener('mousedown', onClick);
            document.removeEventListener('keydown', onEsc);
        };
    }, []);

    // keyboard navigation inside list
    const onListKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIndex((i) => (i + 1) % languages.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIndex((i) => (i - 1 + languages.length) % languages.length);
        } else if (e.key === 'Enter' && activeIndex >= 0) {
            changeLang(languages[activeIndex].code);
        }
    };

    return (
        <div ref={rootRef} className="relative flex flex-col items-center mt-6 space-y-2">
            {/* Label */}
            <p className="text-white font-Poppins-Regular text-sm tracking-wide opacity-80">
                {t('general.selectLanguage')}
            </p>

            {/* Button */}
            <button
                onClick={() => setOpen((v) => !v)}
                className="
          inline-flex items-center gap-2
          px-5 py-2.5 rounded-full
          bg-black-200 text-white
          font-Poppins-Regular text-sm tracking-wide
          shadow-md hover:bg-black-250 transition-all
          focus:outline-none focus:ring-2 focus:ring-white/30
        "
            >
                <span>{currentLang.flag}</span>
                <span>{currentLang.name}</span>
                <svg
                    className="ml-1 h-4 w-4 text-white/90"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {/* Dropdown */}
            {open && (
                <div
                    className="
            absolute mt-24 w-56
            rounded-xl shadow-xl
            bg-black-200 text-white
            ring-1 ring-white/10 z-50
          "
                >
                    <ul
                        tabIndex={0}
                        onKeyDown={onListKeyDown}
                        className="py-1 max-h-64 overflow-y-auto outline-none"
                    >
                        {languages.map((lang, idx) => {
                            const isActive = i18n.resolvedLanguage === lang.code;
                            const isFocused = idx === activeIndex;
                            return (
                                <li key={lang.code}>
                                    <button
                                        onMouseEnter={() => setActiveIndex(idx)}
                                        onClick={() => changeLang(lang.code)}
                                        className={`
                      flex items-center w-full px-4 py-2 text-sm
                      font-Poppins-Regular
                      hover:bg-black-250 transition
                      ${isActive ? 'bg-black-250 font-Poppins-Bold' : ''}
                      ${isFocused && !isActive ? 'bg-black-250/70' : ''}
                    `}
                                    >
                                        <span className="mr-2">{lang.flag}</span>
                                        {lang.name}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}
