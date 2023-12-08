import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///titanic.sqlite")
##need help with howt o do this from CSV

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Save reference to the table
Passenger = Base.classes.passenger

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/nyclandmarks<br/>"
        f"/api/v1.0/airbnbs"
    )


@app.route("/api/v1.0/nyclandmarks")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """List of New York City Historical Landmarks"""
    # Query all landmarks
    results = session.query(Extracted_Landmark_data.location_name).all()

    session.close()

    # Convert list of tuples into normal list
    all_names = list(np.ravel(results))

    return jsonify(all_names)


@app.route("/api/v1.0/airbnbs")
def airbnbs():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """List of Airbnbs"""
    # Query all airbnbs
    results = session.query(airbnb_data.ID, airbnb_data.neighbourhood_group, airbnb_data.price).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_passengers = []
    for name, age, sex in results:
        passenger_dict = {}
        passenger_dict["name"] = name
        passenger_dict["age"] = age
        passenger_dict["sex"] = sex
        all_passengers.append(passenger_dict)

    return jsonify(all_passengers)


if __name__ == '__main__':
    app.run(debug=True)