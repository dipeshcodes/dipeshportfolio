import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black/50 backdrop-blur-sm">
      <motion.div
        className="relative w-[90%] max-w-xl max-h-[80vh] overflow-y-auto border shadow-lg rounded-2xl bg-linear-to-l from-midnight to-navy border-white/10 scrollbar-hide"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-md top-3 right-3 bg-midnight hover:bg-gray-600 transition"
        >
          <img src="assets/close.svg" className="w-5 h-5" alt="close" />
        </button>

        {/* Image */}
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full max-h-60 object-cover rounded-t-2xl"
          />
        )}

        {/* Content */}
        <div className="p-5">
          <h5 className="mb-2 text-xl font-semibold text-white">{title}</h5>
          <p className="mb-3 text-sm text-neutral-300">{description}</p>

          {subDescription?.map((subDesc, index) => (
            <p key={index} className="mb-3 text-sm text-neutral-300">
              {subDesc}
            </p>
          ))}

          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-wrap gap-2">
              {tags?.map(
                (tag) =>
                  tag.path && (
                    <img
                      key={tag.id}
                      src={tag.path}
                      alt={tag.name}
                      className="rounded-lg w-10 h-10 hover:scale-105 transition-transform"
                    />
                  )
              )}
            </div>

            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-blue-400 hover:underline"
              >
                View Project{" "}
                <img src="assets/arrow-up.svg" className="w-4 h-4" alt="link" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
