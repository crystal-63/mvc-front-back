export default function List (mobileData) {
    console.log('mobileData',mobileData)
    return `
        <ul id="mobileList">
            ${
                mobileData.map(item => (
                    `<li>${ moileListItem(item) }</li>`
                )).join('')
            }
        </ul>
        ${ mobileForm() }
    `;
}

export function moileListItem ({
    id,
    brand,
    model
}){
    return `
        <a href="http:#/detail/${ id }">${
            brand + ' ' + model
        }</a>
        <button class="remove-btn" data-id="${ id }">REMOVE</button>
    `;
}

function mobileForm () {
    return `
        <div>
            <p>
                <input type="text" placeholder="Brand" id="brand" />
            </p>
            <p>
                <input type="text" placeholder="Model" id="model" />
            </p>
            <p>
                <input type="text" placeholder="Price" id="price" />
            </p>
            <p>
                <input type="text" placeholder="Spec" id="spec" />
            </p>
            <p>
                <button id="addBtn">新增</button>
            </p>
        </div>
    `
}