import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Sibanda Design Feedback Form</h1>
        <p>
          Thank you for using our service. Please provide feedback on your
          experience.
        </p>
      </header>

      <main>
        <form method="POST" action="https://google.com">
          <fieldset>
            <legend>Personal Information</legend>

            <label htmlFor="full-name">Name (required):</label>
            <input
              type="text"
              id="full-name"
              name="name"
              placeholder="e.g., Jacob Zuma"
              required
              size="20"
            />

            <label htmlFor="email">Email address (required):</label>
            <input
              placeholder="abc@gmail.com"
              required
              id="email"
              type="email"
              name="email"
              size="20"
            />

            <label htmlFor="age">Age (optional):</label>
            <input type="number" name="age" id="age" min="3" max="100" />
          </fieldset>

          <fieldset>
            <legend>Was this your first time working with Sibanda Design?</legend>

            <input
              id="yes-option"
              type="radio"
              name="hotel-stay"
              value="yes"
            />
            <label htmlFor="yes-option">Yes</label>

            <input
              id="no-option"
              type="radio"
              name="hotel-stay"
              value="no"
            />
            <label htmlFor="no-option">No</label>
          </fieldset>

          <fieldset>
            <legend>
              Why did you choose to work with Sibanda Design? (Check all that
              apply)
            </legend>

            <input type="checkbox" id="ads" name="choice" value="ads" />
            <label htmlFor="ads">Social Media Ads</label>

            <input
              type="checkbox"
              id="recommendation"
              name="choice"
              value="recommendation"
            />
            <label htmlFor="recommendation">Personal Recommendation</label>

            <input
              type="checkbox"
              id="location"
              name="choice"
              value="location"
            />
            <label htmlFor="location">Location</label>

            <input
              type="checkbox"
              id="reputation"
              name="choice"
              value="reputation"
              defaultChecked
            />
            <label htmlFor="reputation">Reputation</label>

            <input type="checkbox" id="price" name="choice" value="price" />
            <label htmlFor="price">Price</label>
          </fieldset>

          <fieldset>
            <legend>Ratings</legend>

            <label htmlFor="service">How was the service?</label>
            <select name="service" id="service">
              <option value="poor">Poor</option>
              <option value="very-good" selected>
                Very Good
              </option>
              <option value="excellent">Excellent</option>
            </select>

            <label htmlFor="design">How was your design?</label>
            <select name="design" id="design">
              <option value="poor">Poor</option>
              <option value="satisfactory">Satisfactory</option>
              <option value="good">Good</option>
              <option value="very-good">Very Good</option>
              <option value="excellent" selected>
                Excellent
              </option>
            </select>
          </fieldset>

          <label htmlFor="comments">Other Comments?</label>
          <textarea cols="30" rows="10" name="comments" id="comments"></textarea>

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}
//check info.txt
export default App;
