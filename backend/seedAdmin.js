const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
    console.log('MongoDB Connected for Seeding...');
    
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@proskid.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    // Remove existing admin to avoid conflicts or update it
    await Admin.deleteMany({ role: 'admin' });
    console.log('Cleared existing admin accounts');

    const admin = new Admin({
        name: 'Proskid Admin',
        email: adminEmail,
        username: 'admin',
        password: adminPassword,
    });

    await admin.save();
    console.log('Admin User Created/Updated Successfully');
    console.log(`Email: ${adminEmail}`);
    console.log(`Password: ${adminPassword}`);
    process.exit();
}).catch((err) => {
    console.error(err);
    process.exit(1);
});
