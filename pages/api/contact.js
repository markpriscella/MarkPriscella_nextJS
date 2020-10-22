export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
        name: 'Mark Priscella',
        email: 'markpriscella@gmail.com',
        cell: '508-561-0188',
        home: '508-651-3527',
        website: 'markpriscella.vercel.app'
    }))
  }