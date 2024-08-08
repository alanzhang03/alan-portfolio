import React from "react";
import "./styles/AboutGrid.scss";

const AboutGrid = () => {
	return (
		<section>
			<div className="grid-container">
				<div className="grid-row-1">
					<div className="grid-row-1-col-1">1st Grid</div>
					<div className="grid-row-1-col-2">
						<div className="grid-row-1-col-2-1">2nd Grid</div>
						<div className="grid-row-1-col-2-2">3rd Grid</div>
					</div>
				</div>

				<div className="grid-row-2">
					<div className="grid-row-2-col-1">
                        <div className="grid-row-2-col-1-1">
                            4th grid
                        </div>
                        <div className="grid-row-2-col-1-2">
                            5th Grid
                        </div>
                    </div>
                    
                    <div className="grid-row-2-col-2">
                        6th Grid
                    </div>
				</div>
			</div>
		</section>
	);
};

export default AboutGrid;
