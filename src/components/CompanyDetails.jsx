import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const CompanyDetails = ({ company }) => {
  const {
    name = "IBM (International Business Machines Corporation)",
    title = "A global leader in technology, consulting, and research",
    founded = "1911",
    industry = "Technology, Consulting, Research & Development",
    size = "Over 297,900 (as of 2022)",
    techConsultants = "Approximately 160,000",
    workCulture = {
      dressCode: "Relaxed dress code since the 1990s under CEO Louis V. Gerstner Jr.",
      mentorship: "Open-door policy and strong mentorship culture",
      unions: "Some IBM workers outside the U.S. are represented by labor unions, but IBM traditionally resists labor union organizing",
    },
    jobOpportunities = {
      stability: "Offers stability and career growth",
      innovation: "Opportunities to work on cutting-edge innovation",
      globalPresence: "Strong presence in global markets",
    },
    ratings = {
      stability: 4,
      innovation: 5,
      culture: 3,
      overall: 4,
    },
    about = `
      <p><strong>IBM (International Business Machines Corporation)</strong> is a global leader in technology, consulting, and research. Founded in 1911, IBM has been at the forefront of innovation for over a century.</p>
      <p>IBM is known for its contributions to computing, including the development of the first programmable computer, the IBM 701, and the creation of the FORTRAN programming language. Today, IBM focuses on cloud computing, artificial intelligence, and quantum computing.</p>
      <p>With over 297,900 employees worldwide, IBM operates in more than 170 countries and continues to drive technological advancements.</p>
    `,
  } = company || {};

  // State for reviews and feedback
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: "",
  });

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= rating ? "text-yellow-400" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  // Function to handle rating selection
  const handleRatingChange = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  // Function to handle comment input
  const handleCommentChange = (e) => {
    setNewReview({ ...newReview, comment: e.target.value });
  };

  // Function to submit a review
  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.rating > 0 && newReview.comment.trim()) {
      const review = {
        id: reviews.length + 1,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toLocaleDateString(),
      };
      setReviews([...reviews, review]);
      setNewReview({ rating: 0, comment: "" }); // Reset form
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Company Name and Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          {name}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">{title}</p>
      </div>

      {/* About Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          About {name}
        </h2>
        <div
          className="text-gray-600 dark:text-gray-400"
          dangerouslySetInnerHTML={{ __html: about }}
        />
      </div>

      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Founded
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{founded}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Industry
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{industry}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Company Size
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Total Employees: {size}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Tech Consultants: {techConsultants}
          </p>
        </div>
      </div>

      {/* Work Culture */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Work Culture
        </h2>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
          <li>{workCulture.dressCode}</li>
          <li>{workCulture.mentorship}</li>
          <li>{workCulture.unions}</li>
        </ul>
      </div>

      {/* Job Opportunities */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Job Opportunities & Growth
        </h2>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
          <li>{jobOpportunities.stability}</li>
          <li>{jobOpportunities.innovation}</li>
          <li>{jobOpportunities.globalPresence}</li>
        </ul>
      </div>

      {/* Ratings */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Company Ratings & Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Stability
            </h3>
            <div className="flex space-x-1">
              {renderStars(ratings.stability)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Innovation
            </h3>
            <div className="flex space-x-1">
              {renderStars(ratings.innovation)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Culture
            </h3>
            <div className="flex space-x-1">
              {renderStars(ratings.culture)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Overall
            </h3>
            <div className="flex space-x-1">
              {renderStars(ratings.overall)}
            </div>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Student Reviews
        </h2>
        {/* Review Form */}
        <form onSubmit={handleSubmitReview} className="mb-6">
          <div className="mb-4">
            <label className="block text-gray-800 dark:text-gray-200 mb-2">
              Rate this company:
            </label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  className={`text-2xl ${
                    star <= newReview.rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  <FaStar />
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 dark:text-gray-200 mb-2">
              Leave a comment:
            </label>
            <textarea
              value={newReview.comment}
              onChange={handleCommentChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              rows="4"
              placeholder="Share your experience..."
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Submit Review
          </button>
        </form>

        {/* Existing Reviews */}
        <div>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="mb-4 p-4 border rounded-lg bg-gray-50 dark:bg-gray-700"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex space-x-1">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {review.date}
                </span>
              </div>
              <p className="text-gray-800 dark:text-gray-200">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;