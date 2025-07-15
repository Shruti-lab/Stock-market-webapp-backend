    import express from 'express';

    const app = express();
    const PORT = Number(process.env.PORT) || 4001;

    app.get('/', (req, res) => {
      res.send('Hello from TypeScript Express!');
    });

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });