import React from 'react';
import ProjBottom from '../../Components/projbottom';

function Miscellaneous () {
    return(
        <div>
            <div className="project-text">
            
                <h1>Miscellaneous</h1>
                
                <p project-text="proj-lang">Various Languages</p>
                
                <h2>Project Euler</h2>
                
                <p className="proj-lang">C#</p>
                
                <p>Completed various projects on <a href="https://projecteuler.net/">Project Euler</a> like finding the largest product in a 20x20 grid in the same direction (up, down, left, right, or diagonally).</p>
                
                <a href="https://github.com/nolzulfiu/Project-Euler" target="_blank" rel="noopener noreferrer">View on Github</a>
                
                <h2>Books API</h2>
                
                <p className="proj-lang">C#</p>
                
                <p>Created an API that returns a JSON list of books from a file. Able to do partial searches on author, book title, genre. Able to sort by published date and insert price range.</p>
                
                <a href="https://github.com/nolzulfiu/Books-API" target="_blank" rel="noopener noreferrer">View on Github</a>

            </div>
            
            <ProjBottom />       
        </div>
    );
}

export default Miscellaneous;