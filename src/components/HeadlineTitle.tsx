const HeadlineTitle = ({ title }: { title: string }) => {
  return (
    <div className="mb-5 md:mb-8 flex items-center space-x-3">
      <span className="block size-3 bg-sky-700"></span>
      <h6 className="text-lg md:text-xl font-semibold dark:text-gray-200">
        {title}
      </h6>
    </div>
  );
};

export default HeadlineTitle;
