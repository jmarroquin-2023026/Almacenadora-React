import React from 'react';

const Input = ({ field, label, type, placeholder, value, onChange, error }) => {
    return (
        <div className="mb-5">
            <label htmlFor={field} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input
                type={type}
                id={field}
                placeholder={placeholder || `Enter ${label}`}
                value={value}
                onChange={onChange}
                className={`shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light ${error ? 'border-red-500' : ''}`}
            />
            {error && (
                <p className="text-red-500 text-xs italic">{error}</p>
            )}
        </div>
    );
};

export const Register = () => {
    const [form, setForm] = React.useState({
        name: {
            value: '',
            isValid: false,
            showError: false,
            error: ''
        },
        surname: {
            value: '',
            isValid: false,
            showError: false,
            error: ''
        },
        cui: {
            value: '',
            isValid: false,
            showError: false,
            error: ''
        },
        email: {
            value: '',
            isValid: false,
            showError: false,
            error: ''
        },
        phone: {
            value: '',
            isValid: false,
            showError: false,
            error: ''
        },
        password: {
            value: '',
            isValid: false,
            showError: false,
            error: ''
        },
        passwordConfirm: {
            value: '',
            isValid: false,
            showError: false,
            error: ''
        }
    });

    const handleChange = (field, value) => {
        setForm(prevForm => ({
            ...prevForm,
            [field]: {
                ...prevForm[field],
                value,
                showError: false, // Reset error on input change
                error: ''
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isFormValid = true;
        const updatedForm = { ...form };

        // Basic Validation (you'll likely want more robust validation)
        if (!form.name.value.trim()) {
            updatedForm.name = { ...updatedForm.name, showError: true, error: 'Name is required' };
            isFormValid = false;
        }
        if (!form.surname.value.trim()) {
            updatedForm.surname = { ...updatedForm.surname, showError: true, error: 'Surname is required' };
            isFormValid = false;
        }
        if (!form.cui.value.trim()) {
            updatedForm.cui = { ...updatedForm.cui, showError: true, error: 'CUI is required' };
            isFormValid = false;
        }
        if (!form.email.value.trim()) {
            updatedForm.email = { ...updatedForm.email, showError: true, error: 'Email is required' };
            isFormValid = false;
        }
        if (!form.phone.value.trim()) {
            updatedForm.phone = { ...updatedForm.phone, showError: true, error: 'Phone is required' };
            isFormValid = false;
        }
        if (!form.password.value.trim()) {
            updatedForm.password = { ...updatedForm.password, showError: true, error: 'Password is required' };
            isFormValid = false;
        }
        if (form.password.value !== form.passwordConfirm.value) {
            updatedForm.passwordConfirm = { ...updatedForm.passwordConfirm, showError: true, error: 'Passwords do not match' };
            isFormValid = false;
        }

        setForm(updatedForm);

        if (isFormValid) {
            //  Handle form submission (e.g., send data to a server)
            console.log('Form Data:', {
                name: form.name.value,
                surname: form.surname.value,
                cui: form.cui.value,
                email: form.email.value,
                phone: form.phone.value,
                password: form.password.value,
                passwordConfirm: form.passwordConfirm.value
            });
            alert('Registration successful! (Data logged to console)'); // Replace with a better UI notification
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#1a202c' }}>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md dark:bg-gray-800">
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Registrate</h1>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                        field="name"
                        label="Name"
                        type="text"
                        placeholder="Enter your name"
                        value={form.name.value}
                        onChange={(e) => handleChange('name', e.target.value)}
                        error={form.name.showError ? form.name.error : ''}
                    />
                    <Input
                        field="surname"
                        label="Surname"
                        type="text"
                        placeholder="Enter your surname"
                        value={form.surname.value}
                        onChange={(e) => handleChange('surname', e.target.value)}
                        error={form.surname.showError ? form.surname.error : ''}
                    />
                    <Input
                        field="cui"
                        label="CUI"
                        type="text"
                        placeholder="Enter your CUI"
                        value={form.cui.value}
                        onChange={(e) => handleChange('cui', e.target.value)}
                        error={form.cui.showError ? form.cui.error : ''}
                    />
                    <Input
                        field="email"
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={form.email.value}
                        onChange={(e) => handleChange('email', e.target.value)}
                        error={form.email.showError ? form.email.error : ''}
                    />
                    <Input
                        field="phone"
                        label="Phone"
                        type="text"
                        placeholder="Enter your phone number"
                        value={form.phone.value}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        error={form.phone.showError ? form.phone.error : ''}
                    />
                    <Input
                        field="password"
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={form.password.value}
                        onChange={(e) => handleChange('password', e.target.value)}
                        error={form.password.showError ? form.password.error : ''}
                    />
                    <Input
                        field="passwordConfirm"
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm your password"
                        value={form.passwordConfirm.value}
                        onChange={(e) => handleChange('passwordConfirm', e.target.value)}
                        error={form.passwordConfirm.showError ? form.passwordConfirm.error : ''}
                    />
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};