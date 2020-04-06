import React from 'react';

function showCategoryList(){

    return(
        <div>
            <table className="table table-bordered table-hover">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Furniture</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Device</td>
                </tr>
            </table>
        </div>
    );

}

export default showCategoryList;