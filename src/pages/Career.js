import React, { useState } from 'react';


function Career() {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
        resume: null,
        message: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let formErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!formData.name.trim()) {
            formErrors.name = "Name is required";
        }
        if (!emailRegex.test(formData.email)) {
            formErrors.email = "Invalid email format";
        }
        if (!phoneRegex.test(formData.phone)) {
            formErrors.phone = "Phone number must be 10 digits";
        }
        if (!formData.position.trim()) {
            formErrors.position = "Position is required";
        }
        if (!formData.resume) {
            formErrors.resume = "Resume file is required";
        }
        if (!formData.message.trim()) {
            formErrors.message = "Message is required";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        // Validate file type
        const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
        if (file && !allowedTypes.includes(file.type)) {
            alert("Invalid file type. Please upload a PDF or Word document.");
            setFormData({ ...formData, resume: null });
            return;
        }

        // Validate file size (e.g., 5MB max)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file && file.size > maxSize) {
            alert("File size exceeds 5MB.");
            setFormData({ ...formData, resume: null });
            return;
        }

        setFormData({
            ...formData,
            resume: file,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate form data
        if (!validate()) return;

        const fileInput = formData.resume; // Get the uploaded file

        if (fileInput) {
            // Create a new FileReader for reading the resume file
            const reader = new FileReader();

            // Define what happens when the file is read
            reader.onload = async (e) => {
                const fileBase64 = e.target.result.split(',')[1]; // Get the Base64 string
                const data = {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    position: formData.position,
                    message: formData.message,
                    fileBase64: fileBase64,
                    fileName: fileInput.name,
                    fileType: fileInput.type,
                };

                try {
                    const response = await fetch('https://script.google.com/macros/s/AKfycbwhXqWETNRVNHxZON_v7tI_cSUjH4EMMO1OklWsST1gkq2xFLGYmsKxpbywJRg56CRXaw/exec', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    });

                    // Check if the response is ok
                    if (!response.ok) {
                        throw new Error('Network response was not ok: ' + response.statusText);
                    }

                    const result = await response.json();
                    // Handle success or error based on the result
                    if (result.result === 'success') {
                        alert('Form submitted successfully!');
                    } else {
                        alert('Error submitting form: ' + result.message);
                    }
                } catch (error) {
                    console.error('Error submitting the form:', error);
                    alert('Error submitting the form: ' + error.message);
                }
            };

            // Start reading the file
            reader.readAsDataURL(fileInput);
        } else {
            alert('Please upload a resume.');
        }
    };

    return (
        <div className="container pt-5 mt-5 mb-5 px-4 " id='career'>
            <h1 className="text-center pb-3">Career Form</h1>

            <div className='row border-top border-2  d-flex justify-content-center '>
                <div className='col-lg-5 mt-5 border border-3 rounded '>

                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="input-container">
                            <input
                                placeholder="Enter Full Name"
                                className="input-field"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="name" className="input-label">Full Name</label>
                            <span className="input-highlight"></span>
                            {errors.name && <p className="text-danger">{errors.name}</p>}
                        </div>

                        <div className="input-container">
                            <input
                                placeholder="Enter Email"
                                className="input-field"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email" className="input-label">Email</label>
                            <span className="input-highlight"></span>
                            {errors.email && <p className="text-danger">{errors.email}</p>}
                        </div>

                        <div className="input-container">
                            <input
                                placeholder="Enter Phone Number"
                                className="input-field"
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="phone" className="input-label">Phone Number</label>
                            <span className="input-highlight"></span>
                            {errors.phone && <p className="text-danger">{errors.phone}</p>}
                        </div>

                        <div className="input-container">
                            <input
                                placeholder="Position Applied For"
                                className="input-field"
                                type="text"
                                id="position"
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="position" className="input-label">Position</label>
                            <span className="input-highlight"></span>
                            {errors.position && <p className="text-danger">{errors.position}</p>}
                        </div>

                        <div className="input-container">
                            <input
                                className="input-field"
                                type="file"
                                id="resume"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                required
                            />
                            <label htmlFor="resume" className="input-label">Upload Resume</label>
                            <span className="input-highlight"></span>
                            {errors.resume && <p className="text-danger">{errors.resume}</p>}
                        </div>

                        <div className="input-container">
                            <textarea
                                placeholder="Your Message"
                                className="input-field"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="message" className="input-label">Message</label>
                            <span className="input-highlight"></span>
                            {errors.message && <p className="text-danger">{errors.message}</p>}
                        </div>

                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Career;

