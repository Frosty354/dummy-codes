const instance1 = `Check out instance 1.`;
const instance2 =  `Here is instance 2`;
// Application data will be available under a global variable `appData`.
const appData1 = {
    // Users data.
    users: [
        {
            id: 'user-1',
            name: 'Mex Haddox'
        },
        {
            id: 'user-2',
            name: 'Zee Croce'
        }
    ],

    // The ID of the current user.
    userId: 'user-1',

    // Comment threads data.
    commentThreads: [
        {
            threadId: 'thread-1',
            comments: [
                {
                    commentId: 'comment-1',
                    authorId: 'user-1',
                    content: '<p>Are we sure we want to use a made-up disorder name?</p>',
                    createdAt: new Date( '09/20/2018 14:21:53' ),
                    attributes: {}
                },
                {
                    commentId: 'comment-2',
                    authorId: 'user-2',
                    content: '<p>Why not?</p>',
                    createdAt: new Date( '09/21/2018 08:17:01' ),
                    attributes: {}
                }
            ],
            context: {
                type: 'text',
                value: 'Bilingual Personality Disorder'
            },
            unlinkedAt: null,
            resolvedAt: null,
            resolvedBy: null,
            attributes: {}
        }
    ],

     // Editor initial data.
     initialData:
         `<h2>
             <comment-start name="thread-1"></comment-start>
             Bilingual Personality Disorder
             <comment-end name="thread-1"></comment-end>
         </h2>
         <p>
             This may be the first time you hear about this made-up disorder but it actually isn’t so far from the truth.
             As recent studies show, the language you speak has more effects on you than you realize.
             According to the studies, the language a person speaks affects their cognition,
             behavior, emotions and hence <strong>their personality</strong>.
         </p>
         <p>
             This shouldn’t come as a surprise
             <a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since we already know</a>
             that different regions of the brain become more active depending on the activity.
             The structure, information and especially <strong>the culture</strong> of languages varies substantially
             and the language a person speaks is an essential element of daily life.
         </p>`
};

const revisionHistoryData = {
    // The initial editor data.
    data: `<figure class="image">
        <img src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/revision-history-demo.png">
    </figure>
    <h1>PUBLISHING AGREEMENT</h1>
    <h3>Introduction</h3>
    <p>This publishing contract, the “contract”, is entered into as of 1st June 2020 by and between The Lower Shelf, the “Publisher”, and John Smith, the “Author”.</p>
    <h3>Grant of Rights</h3>
    <p>The Author grants the Publisher full right and title to the following, in perpetuity:</p>
    <ul>
        <li>To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future.</li>
        <li>To create or devise modified, abridged, or derivative works based on the works listed.</li>
        <li>To allow others to use the listed works at their discretion, without providing additional compensation to the Author.</li>
    </ul>
    <p>These rights are granted by the Author on behalf of him and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future.</p>
    <p>Any rights not granted to the Publisher above remain with the Author.</p>
    <p>The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature.</p>`,

    // The user data.
    user: {
        id: 'u1',
        name: 'Mex Haddox'
    },

    // The initial revisions data.
    revisions: [
        {
            "id": "initial",
            "name": "Initial revision",
            "creatorId": "u1",
            "authorsIds": [ "u1" ],
            "diffData": {
                "main": {
                    "insertions": '[{"name":"h1","attributes":[],"children":["PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of ………… by and between The Lower Shelf, the “Publisher”, and …………, the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him/herself and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]},{"name":"p","attributes":[],"children":["Publishing formats are enumerated in Appendix A."]}]',
                    "deletions": '[{"name":"h1","attributes":[],"children":["PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of ………… by and between The Lower Shelf, the “Publisher”, and …………, the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him/herself and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]},{"name":"p","attributes":[],"children":["Publishing formats are enumerated in Appendix A."]}]'
                }
            },
            "createdAt": "2021-05-27T13:22:59.077Z",
            "attributes": {},
            "fromVersion": 1,
            "toVersion": 1
        },
        {
            "id": "e6f80e6be6ee6057fd5a449ab13fba25d",
            "name": "Updated with the actual data",
            "creatorId": "u1",
            "authorsIds": [ "u1" ],
            "diffData": {
                "main": {
                    "insertions": '[{"name":"h1","attributes":[],"children":["PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of ",{"name":"revision-start","attributes":[["name","insertion:u1:0"]],"children":[]},"1st",{"name":"revision-end","attributes":[["name","insertion:u1:0"]],"children":[]}," ",{"name":"revision-start","attributes":[["name","insertion:u1:1"]],"children":[]},"June 2020 ",{"name":"revision-end","attributes":[["name","insertion:u1:1"]],"children":[]},"by and between The Lower Shelf, the “Publisher”, and ",{"name":"revision-start","attributes":[["name","insertion:u1:2"]],"children":[]},"John Smith",{"name":"revision-end","attributes":[["name","insertion:u1:2"]],"children":[]},", the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]}]',
                    "deletions": '[{"name":"h1","attributes":[],"children":["PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of ",{"name":"revision-start","attributes":[["name","deletion:u1:0"]],"children":[]},"…………",{"name":"revision-end","attributes":[["name","deletion:u1:0"]],"children":[]}," by and between The Lower Shelf, the “Publisher”, and ",{"name":"revision-start","attributes":[["name","deletion:u1:1"]],"children":[]},"…………",{"name":"revision-end","attributes":[["name","deletion:u1:1"]],"children":[]},", the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him",{"name":"revision-start","attributes":[["name","deletion:u1:2"]],"children":[]},"/herself",{"name":"revision-end","attributes":[["name","deletion:u1:2"]],"children":[]}," and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature.",{"name":"revision-start","attributes":[["name","deletion:u1:3"]],"children":[]}]},{"name":"p","attributes":[],"children":["Publishing formats are enumerated in Appendix A.",{"name":"revision-end","attributes":[["name","deletion:u1:3"]],"children":[]}]}]'
                }
            },
            "createdAt": "2021-05-27T13:23:52.553Z",
            "attributes": {},
            "fromVersion": 1,
            "toVersion": 20
        },
        {
            "id": "e6590c50ccbc86acacb7d27231ad32064",
            "name": "Inserted logo",
            "creatorId": "u1",
            "authorsIds": [ "u1" ],
            "diffData": {
                "main": {
                    "insertions": '[{"name":"figure","attributes":[["data-revision-start-before","insertion:u1:0"],["class","image"]],"children":[{"name":"img","attributes":[["src","https://ckeditor.com/docs/ckeditor5/latest/assets/img/revision-history-demo.png"]],"children":[]}]},{"name":"h1","attributes":[],"children":[{"name":"revision-end","attributes":[["name","insertion:u1:0"]],"children":[]},"PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of 1st June 2020 by and between The Lower Shelf, the “Publisher”, and John Smith, the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]}]',
                    "deletions": '[{"name":"h1","attributes":[["data-revision-start-before","deletion:u1:0"]],"children":[{"name":"revision-end","attributes":[["name","deletion:u1:0"]],"children":[]},"PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of 1st June 2020 by and between The Lower Shelf, the “Publisher”, and John Smith, the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]}]'
                }
            },
            "createdAt": "2021-05-27T13:26:39.252Z",
            "attributes": {},
            "fromVersion": 20,
            "toVersion": 24
        },
        // An empty current revision.
        {
            "id": "egh91t5jccbi894cacxx7dz7t36aj3k021",
            "name": null,
            "creatorId": null,
            "authorsIds": [],
            "diffData": {
                "main": {
                    "insertions": '[{"name":"figure","attributes":[["class","image"]],"children":[{"name":"img","attributes":[["src","https://ckeditor.com/docs/ckeditor5/latest/assets/img/revision-history-demo.png"]],"children":[]}]},{"name":"h1","attributes":[],"children":["PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of 1st June 2020 by and between The Lower Shelf, the “Publisher”, and John Smith, the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]}]',
                    "deletions": '[{"name":"h1","attributes":[],"children":["PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of 1st June 2020 by and between The Lower Shelf, the “Publisher”, and John Smith, the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]}]'
                }
            },
            "createdAt": "2021-05-27T13:26:39.252Z",
            "attributes": {},
            "fromVersion": 24,
            "toVersion": 24
        }
    ]
};

export default {
    instance1,instance2,appData1,revisionHistoryData
}