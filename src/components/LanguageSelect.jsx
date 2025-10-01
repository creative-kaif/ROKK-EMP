import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';

const languages = [
    // Use the country you want to represent each language (ISO 3166-1 alpha-2)
    { code: 'en', name: 'English', country: 'US' }, // or GB if you prefer UK
    { code: 'de', name: 'Deutsch', country: 'DE' },
    { code: 'bg', name: 'Български', country: 'BG' },
    { code: 'cs', name: 'Čeština', country: 'CZ' },
    { code: 'da', name: 'Dansk', country: 'DK' },
    { code: 'el', name: 'Ελληνικά', country: 'GR' },
    { code: 'es', name: 'Español', country: 'ES' },
    { code: 'fr', name: 'Français', country: 'FR' },
    { code: 'hu', name: 'Magyar', country: 'HU' },
    { code: 'it', name: 'Italiano', country: 'IT' },
    { code: 'nl', name: 'Nederlands', country: 'NL' },
    { code: 'no', name: 'Norsk', country: 'NO' },
    { code: 'pl', name: 'Polski', country: 'PL' },
    { code: 'pt', name: 'Português', country: 'PT' },
    { code: 'ro', name: 'Română', country: 'RO' },
    { code: 'ru', name: 'Русский', country: 'RU' },
    { code: 'sk', name: 'Slovenčina', country: 'SK' },
    { code: 'sv', name: 'Svenska', country: 'SE' },
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
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <ReactCountryFlag
                    countryCode={currentLang.country}
                    svg
                    className="mr-1"
                    style={{ width: '1.1rem', height: '1.1rem' }}
                    title={currentLang.country}
                />
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
                        role="listbox"
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
                                        role="option"
                                        aria-selected={isActive}
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
                                        <ReactCountryFlag
                                            countryCode={lang.country}
                                            svg
                                            className="mr-2"
                                            style={{ width: '1rem', height: '1rem' }}
                                            title={lang.country}
                                        />
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
