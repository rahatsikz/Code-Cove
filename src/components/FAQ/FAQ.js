import React from "react";
import Footer from "../Footer/Footer";

const FAQ = () => {
  return (
    <div>
      <div className="bg-slate-50 dark:bg-gray-800 h-[80.8vh]">
        <div className="w-4/5 xl:w-1/2 mx-auto p-12">
          <p className="text-center mb-8 text-xl font-bold">
            Frequently Asked Question
          </p>

          <div className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-white dark:bg-gray-900 dark:text-white text-stone-500 peer-checked:bg-white dark:peer-checked:bg-gray-900 dark:peer-checked:text-white peer-checked:text-stone-500">
              What does it take to be a web developer?
            </div>
            <div className="collapse-content bg-sky-400 my-4 text-primary-content peer-checked:bg-sky-400 peer-checked:text-secondary-content">
              <p className="pt-3">
                To become a Web Developer, you should have an understanding of
                HTML, CSS, and JavaScript. It's also recommended to learn about
                CSS and CSS frameworks. Developing these fundamental web
                development skills will give you the foundation and logic for
                communicating with programming languages.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-white dark:bg-gray-900 dark:text-white text-stone-500 peer-checked:bg-white dark:peer-checked:bg-gray-900 dark:peer-checked:text-white peer-checked:text-stone-500">
              How many months does it take to learn coding?
            </div>
            <div className="collapse-content bg-sky-400 my-4 text-primary-content peer-checked:bg-sky-400 peer-checked:text-secondary-content">
              <p className="pt-3">
                Most coding bootcamps last 3-4 months and teach enough coding
                skills to qualify graduates for entry-level coding jobs. It
                typically takes 6-12 months to learn to code on your own.
                Likewise, a bachelor's degree in computer science or computer
                programming usually takes four years.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-white dark:bg-gray-900 dark:text-white text-stone-500 peer-checked:bg-white dark:peer-checked:bg-gray-900 dark:peer-checked:text-white peer-checked:text-stone-500">
              What is the benefit of learning coding?
            </div>
            <div className="collapse-content bg-sky-400 my-4 text-primary-content peer-checked:bg-sky-400 peer-checked:text-secondary-content">
              <p className="pt-3">
                Coding is a skill that translates into many career paths and
                enhances many others, making professionals more versatile and
                valuable to employers. Job prospects for coders extend far
                beyond technology companies. Coding improves the mind to view
                problems from multiple perspectives and think creatively about
                solving them
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FAQ;
