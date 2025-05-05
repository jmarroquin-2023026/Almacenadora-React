import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    type,
    placeholder,
    textarea,
    className
}) => {
    
    const handleValueChange = (e)=>{
        onChangeHandler(e.target.value, field)
    }

    const handleOnBlur = (e)=>{
        onBlurHandler(e.target.value,field)

    }
  return (
    <>
        <div className='auth-form-label'>
            <span>{label}</span>
        </div>
        {
            textarea ? (
                <textarea
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleOnBlur}
                    rows={5}
                    style={{maxWidth: '400px'}}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleOnBlur}
                    placeholder={placeholder}
                    className='"shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light'
                />
            )
        }
        <span className="auth-form-validation-message">
            {showErrorMessage && validationMessage}
        </span>
    </>
  )
}

Input.propTypes = {
    field: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    showErrorMessage: PropTypes.bool.isRequired,
    validationMessage: PropTypes.string,
    onBlurHandler: PropTypes.func.isRequired,
    textarea: PropTypes.bool
}