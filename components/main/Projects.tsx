import ProjectCard from "@/components/sub/ProjectCard";

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to to-cyan-500 py-20">
        My Projects
      </h1>
      <div
        className="grid md:grid-cols-3 gap-10 px-10"
        // className="h-full w-full flex flex-col md:flex-row gap-10 px-10 "
      >
        <ProjectCard
          src="/Next13-admin.png"
          title="Next.js Ecommerce Admin Dashboard"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://next13-ecommerce-admin-sandy.vercel.app/"
        />
        <ProjectCard
          src="/Next13-store.png"
          title="Next.js Ecommerce Store"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://next13-ecommerce-store-teal.vercel.app/"
        />
        <ProjectCard
          src="/react-ecom.png"
          title="React.js Ecommerce Store Management"
          description="Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://ecommerce-management-wheat.vercel.app/"
        />
        <ProjectCard
          src="/nike-clone.png"
          title="React.js Nike Clone"
          description="Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://nike-clone-one.vercel.app/"
        />
        <ProjectCard
          src="/pc-store.png"
          title="PC Store"
          description="Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://pc-store-app-ecru.vercel.app/"
        />
        <ProjectCard
          src="/ts-shopping-cart.png"
          title="Shopping Cart using TS"
          description="Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://shopping-cart-eight-indol.vercel.app/"
        />
      </div>
    </div>
  );
}

export default Projects;
