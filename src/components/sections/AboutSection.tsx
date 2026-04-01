import { motion } from 'framer-motion';
import { Code, Database, Globe, Zap } from 'lucide-react';

export const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      name: 'Full-Stack Development',
      description: 'React, TypeScript, Node.js, Streamlit, HTML/CSS',
    },
    {
      icon: Database,
      name: 'Data Engineering',
      description: 'SQL, Dataiku, Web Scraping, MySQL, PostgreSQL',
    },
    {
      icon: Globe,
      name: 'Cloud & Tools',
      description: 'AWS (EC2/S3), GitHub, Jupyter Notebook',
    },
    {
      icon: Zap,
      name: 'Machine Learning',
      description: 'scikit-learn, pandas, NumPy, Model Optimization',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-6 border-b border-border/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-5">About</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm Rajdeep Roy, a Computer Science undergraduate at VIT Vellore building production-focused software and machine learning systems.
            I enjoy combining clean interfaces with practical data-driven solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 border border-border bg-card"
            >
              <skill.icon className="w-6 h-6 text-foreground mb-4" aria-hidden="true" />
              <h3 className="text-lg font-medium text-foreground mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 border border-border bg-card"
        >
          <h3 className="text-2xl font-medium text-foreground mb-4">Professional Journey</h3>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              My journey began with curiosity for how systems work and evolved into shipping solutions that improve real workflows.
              At SOL Analytics, I contributed to scalable data pipelines and reporting for large datasets.
            </p>
            <p>
              As Project & Events Head at IETE ISF, I led technical events and student initiatives. I’m currently exploring deeper work in machine learning,
              systems, and security-focused engineering.
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
};
