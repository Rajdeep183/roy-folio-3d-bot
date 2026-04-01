import { motion } from 'framer-motion';
import { ExternalLink, Award, Briefcase, Users, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
}

interface Experience {
  id: number;
  type: 'internship' | 'volunteer' | 'certification';
  title: string;
  organization: string;
  description: string;
  date: string;
  skills: string[];
  icon: any;
}

export const ProjectsSection = () => {
  const [projects] = useState<GitHubRepo[]>([
    {
      id: 0,
      name: 'Stock price predictor',
      description:
      'Next-Generation Stock Prediction Platform that uses advanced machine learning models (transformer, quantum-inspired, LSTM, ensemble) with real-time sentiment analysis and macro-economic factors to provide AI-powered stock forecasts through a professional React/Next.js web interface.',
      html_url: 'https://github.com/Rajdeep183/stock_pred.git',
      homepage: '',
      topics: ['LSTM', 'Ensemble', 'Data Pipeline'],
      language: 'Python, TypeScript',
    },
    {
      id: 1,
      name: 'Real-Estate-Predictor',
      description:
        'Linear regression model with 91% R² score for predicting housing prices using feature-engineered data.',
      html_url: 'https://github.com/Rajdeep183/Real-Estate-Predictor',
      homepage: '',
      topics: ['Regression', 'scikit-learn', 'Data Pipeline'],
      language: 'Jupyter Notebook',
    },
    {
      id: 2,
      name: 'recomender',
      description: 'Collaborative filtering model on MovieLens dataset with MAE of 0.68, using Python.',
      html_url: 'https://github.com/Rajdeep183/recomender',
      homepage: '',
      topics: ['Recommendation', 'Collaborative Filtering', 'Evaluation'],
      language: 'Jupyter Notebook',
    },

     {
      id: 3,
      name: 'Plant disease detection',
      description:
      'A project for detecting plant diseases using   machine learning techniques.',
      html_url: 'https://github.com/Rajdeep183/plant_disease_detection.git',
      homepage: '',
      topics: ['Jupyter Notebook', 'Scikit-Learn', 'EfficientNet'],
      language: 'Python',
    },
  ]);

  const experiences: Experience[] = [
    {
      id: 0,
      type: 'internship',
      title: 'Project Intern',
      organization: 'VECC(Dept. of Atomic Energy, Govt. of India), Kolkata',
      description:
        'Created the OTP system for the mail server.',
      date: 'May 2025 - Jul 2025',
      skills: ['C', 'HCL domino', 'Linux'],
      icon: Briefcase
    },
    {
      id: 1,
      type: 'internship',
      title: 'Data Analyst Intern',
      organization: 'SOL Analytics, Dubai',
      description:
        'Automated data pipelines with Dataiku, optimized ingestion processes for 100K+ records, and executed 100+ SQL queries to extract insights from large datasets.',
      date: 'Jun 2024 - Jul 2024',
      skills: ['Python', 'Dataiku', 'SQL', 'Web Scraping', 'Data Analysis'],
      icon: Briefcase
    },
    {
      id: 2,
      type: 'volunteer',
      title: 'Project & Events Head',
      organization: 'IETE ISF, VIT Vellore',
      description:
        'Led 12+ technical events and workshops, initiated collaborations, and participated in 25+ national AI & cloud seminars to strengthen tech community engagement.',
      date: 'Apr 2024 - Present',
      skills: ['Leadership', 'Event Planning', 'AI', 'Cloud Computing', 'Team Management'],
      icon: Users
    },
    {
      id: 3,
      type: 'certification',
      title: 'AWS Certified Solutions Architect – Associate',
      organization: 'Amazon Web Services',
      description: 'Validated expertise in designing and deploying scalable systems on AWS cloud.',
      date: 'Mar 2025',
      skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3'],
      icon: Award
    },
    {
      id: 4,
      type: 'certification',
      title: 'Dataiku ML Practitioner',
      organization: 'Dataiku',
      description:
        'Built predictive models, pipelines, and automated workflows in Dataiku platform.',
      date: 'Jul 2024',
      skills: ['Dataiku', 'Machine Learning', 'Model Deployment'],
      icon: Award
    },
    {
      id: 5,
      type: 'certification',
      title: 'Data Science Foundation Certification',
      organization: 'IIT Bhubaneswar',
      description:
        'Learned foundational data science techniques, analytics, and statistical modeling.',
      date: 'Aug 2023',
      skills: ['Data Science', 'Statistics', 'Analytics'],
      icon: Award
    }
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 border-b border-border/60"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-5">
            Projects & Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my machine learning projects, professional experience, and certifications in AI and data science.
          </p>
        </motion.div>

        {/* GitHub Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-card border-border h-full shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{project.name}</CardTitle>
                   <CardDescription className="text-muted-foreground break-words">
                  {project.description || "No description available"}
                  </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.topics?.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                          >
                            {topic}
                          </span>
                        ))}
                        {project.language && (
                          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                            {project.language}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      >
                        <Github size={18} />
                        Code
                      </a>
                      {project.homepage && project.homepage !== "" && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        >
                          <ExternalLink size={18} />
                          Demo
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">Professional Experience</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-card border-border h-full shadow-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <exp.icon className="w-7 h-7 text-foreground" />
                      <div>
                        <CardTitle className="text-lg text-foreground">{exp.title}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">{exp.organization}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{exp.date}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
