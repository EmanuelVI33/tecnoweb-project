import React from 'react';
import Dropdown from '../Dropdown';

interface FontSizeDropdownProps {
    changeFontSize: (size: string) => void;
}

const FontSizeDropdown: React.FC<FontSizeDropdownProps> = ({ changeFontSize }) => {
    return (
        <div className="relative ms-3 ">
            <Dropdown>
                <Dropdown.Trigger>
                    <div className='flex gap-2 justify-center items-center'>
                        <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none transition ease-in-out duration-150"
                            >
                                Tamaño de Letra
                                <svg
                                    className="ms-2 -me-0.5 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </span>
                    </div>
                </Dropdown.Trigger>

                <Dropdown.Content>
                    <div className='bg-gray-100 dark:bg-gray-700'>
                        <button
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900"
                            onClick={() => changeFontSize('text-xs')}
                        >
                            XS
                        </button>
                        <button
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900"
                            onClick={() => changeFontSize('text-sm')}
                        >
                            SM
                        </button>
                        <button
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900"
                            onClick={() => changeFontSize('text-base')}
                        >
                            Base
                        </button>
                        <button
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900"
                            onClick={() => changeFontSize('text-lg')}
                        >
                            LG
                        </button>
                        <button
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900"
                            onClick={() => changeFontSize('text-xl')}
                        >
                            XL
                        </button>
                        <button
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900"
                            onClick={() => changeFontSize('text-2xl')}
                        >
                            2XL
                        </button>
                    </div>
                </Dropdown.Content>
            </Dropdown>
        </div>
    );
};

export default FontSizeDropdown;