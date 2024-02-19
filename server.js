import express from 'express';
import { nanoid } from 'nanoid';
import * as dotenv from 'dotenv';
import morgan from 'morgan';


const app = express();
dotenv.config();

let jobs = [
    { id: nanoid(), company: 'apple', position: 'front-end' },
    { id: nanoid(), company: 'google', position: 'back-end' },
];

// GET ALL JOBS
app.get('/api/v1/jobs', (req, res) => {
    // console.log(jobss);
    res.status(200).json({ jobs });
});


//create job
app.post('/api/v1/jobs', (req, res) => {
    const { company, position } = req.body;
    if (!company || !position) {
        return res.status(400).json({ msg: 'please provide company and position' });
    }
    const id = nanoid(10);
    // console.log(id);
    const job = { id, company, position };
    jobs.push(job);
    res.status(200).json({ job });
});

// GET SINGLE JOB

app.get('/api/v1/jobs/:id', (req, res) => {
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        throw new Error('job not found');
        return res.status(404).json({ msg: `no job with id ${id}` });
    }
    res.status(200).json({ job });
});


// EDIT JOB

app.patch('/api/v1/jobs/:id', (req, res) => {
    const { company, position } = req.body;
    if (!company || !position) {
        return res.status(400).json({ msg: 'please provide company and position' });
    }
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    }

    job.company = company;
    job.position = position;
    res.status(200).json({ msg: 'job modified', job });
});

// DELETE JOB

app.delete('/api/v1/jobs/:id', (req, res) => {
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    }
    const newJobs = jobs.filter((job) => job.id !== id);
    jobs = newJobs;

    res.status(200).json({ msg: 'job deleted' });
});

//not found 
app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' });
});


//error
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ msg: 'something went wrong' });
});

const port = process.env.PORT || 5100;
app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
});