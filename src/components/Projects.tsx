import React from 'react';

const demoProjects = [
    { id: 1, title: 'Landing Concept', desc: 'Responsive landing with micro-interactions.' },
    { id: 2, title: 'Design System', desc: 'Tokens, components and documentation.' },
    { id: 3, title: 'Animation Experiments', desc: 'Micro-animations using CSS and JS.' },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="projects">
            <h2 className="section-title">Selected work</h2>
            <div className="grid">
                {demoProjects.map(p => (
                    <article key={p.id} className="card">
                        <div className="card-thumb" />
                        <div className="card-body">
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;