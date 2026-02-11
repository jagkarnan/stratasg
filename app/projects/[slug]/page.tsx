import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectGallery } from "@/components/project-gallery"
import { projects } from "@/lib/projects-data"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: "Project Not Found - Strata.SG",
    }
  }

  return {
    title: `${project.title} - Strata.SG`,
    description: project.fullDescription || project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <ProjectGallery project={project} />
      </div>
      <Footer />
    </main>
  )
}
