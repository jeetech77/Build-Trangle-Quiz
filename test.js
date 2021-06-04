var dict={
    outer:
        [
            {
                angle:[10,20],
                ans:"yes"
            },
            {
                angle:[40,50],
                ans:"No"
            }
        ],
    inner:
    [
        {
            angle:[80,90],
            ans:"Yes"
        },
        {
            angle:[70,30],
            ans:"No"
        }
    ]
    
}
console.log(dict.inner[0].angle[0]);