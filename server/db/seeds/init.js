const User = require("../models/User");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex("issue_responses").del();
  await knex("issues").del();
  await knex("followers").del();
  await knex("posts").del();
  await knex("users").del();

  await knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1");
  await knex.raw("ALTER SEQUENCE posts_id_seq RESTART WITH 1");
  await knex.raw("ALTER SEQUENCE followers_id_seq RESTART WITH 1");
  await knex.raw("ALTER SEQUENCE issues_id_seq RESTART WITH 1");
  await knex.raw("ALTER SEQUENCE issue_responses_id_seq RESTART WITH 1");

  await User.create(
    "Mayor of NYC",
    "1234",
    true,
    "Eric",
    "Adams",
    "10007",
    "Committed to enhancing public safety and economic prosperity.",
    "City Hall",
    "New York",
    "https://pbs.twimg.com/profile_images/1310062565750341633/bwInZ7l2_400x400.jpg"
  );
  await User.create(
    "Brooklyn Borough President",
    "1234",
    true,
    "Antonio",
    "Reynoso",
    "11201",
    "Advocating for affordable housing and environmental justice.",
    "Brooklyn",
    "New York",
    "https://pbs.twimg.com/profile_images/1357713918005772290/cs8QZXTD_400x400.jpg"
  );
  await User.create(
    "Senator Schumer",
    "1234",
    true,
    "Charles",
    "Schumer",
    "10017",
    "Senate Majority Leader and economic and social issues advocate.",
    "Manhattan",
    "New York",
    "https://pbs.twimg.com/profile_images/1452436186404884483/mrC4Nq6O_400x400.jpg"
  );
  await User.create(
    "Senator Gillibrand",
    "1234",
    true,
    "Kirsten",
    "Gillibrand",
    "10017",
    "Fighting for families and women's rights.",
    "New York",
    "New York",
    "https://cdn.britannica.com/07/181907-050-D4005A9F/Kirsten-Gillibrand.jpg"
  );
  await User.create(
    "Rep. Hakeem Jeffries",
    "1234",
    true,
    "Hakeem",
    "Jeffries",
    "11224",
    "Focused on criminal justice reform and civil rights.",
    "Brooklyn",
    "New York",
    "https://media.cnn.com/api/v1/images/stellar/prod/221228122127-hakeem-jeffries-file-122122.jpg?c=original"
  );
  await User.create(
    "Rep. Yvette D. Clarke",
    "1234",
    true,
    "Yvette",
    "Clarke",
    "11226",
    "Advocating for immigrant rights and comprehensive immigration reform.",
    "Brooklyn",
    "New York",
    "https://clarke.house.gov/wp-content/uploads/2017/02/bio.jpg"
  );
  await User.create(
    "Rep. Nicole Malliotakis",
    "1234",
    true,
    "Nicole",
    "Malliotakis",
    "11209",
    "Fighting for fiscal responsibility and government transparency.",
    "Brooklyn",
    "New York",
    "https://malliotakis.house.gov/sites/evo-subsites/malliotakis.house.gov/files/evo-media-image/Congresswoman%20Nicole%20Malliotakis_0.jpg"
  );
  await User.create(
    "Assembly Member Helene Weinstein",
    "1234",
    true,
    "Helene",
    "Weinstein",
    "11229",
    "Committed to education and senior citizen advocacy.",
    "Brooklyn",
    "New York",
    "https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/HeleneWeinstein.jpg"
  );
  await User.create(
    "Assembly Member Michael Novakhov",
    "1234",
    true,
    "Michael",
    "Novakhov",
    "11235",
    "Focused on public health and community safety.",
    "Brooklyn",
    "New York",
    "https://pbs.twimg.com/profile_images/1770979025453748224/Oim4YHFS_400x400.jpg"
  );
  await User.create(
    "Assembly Member Alec Brook-Krasny",
    "1234",
    true,
    "Alec",
    "Brook-Krasny",
    "11224",
    "Supporting local businesses and economic development.",
    "Brooklyn",
    "New York",
    "https://brooklyneagle.com/wp-content/uploads/2015/07/alec-brook-krasny_0.jpg"
  );
  await User.create(
    "Assembly Member William A. Colton",
    "1234",
    true,
    "William",
    "Colton",
    "11223",
    "Advocating for education reform and environmental protection.",
    "Brooklyn",
    "New York",
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/William_Colton_2012.jpg"
  );
  await User.create(
    "Assembly Member Simcha Eichenstein",
    "1234",
    true,
    "Simcha",
    "Eichenstein",
    "11219",
    "Dedicated to community service and housing affordability.",
    "Brooklyn",
    "New York",
    "https://pbs.twimg.com/profile_images/1050219799706574849/kP1WKTWT_400x400.jpg"
  );
  await User.create(
    "Assembly Member Jaime Williams",
    "1234",
    true,
    "Jaime",
    "Williams",
    "11234",
    "Fighting for veterans' rights and public safety.",
    "Brooklyn",
    "New York",
    "https://www.brooklynpaper.com/wp-content/uploads/2016/08/mm-59th-assembly-election-2016-04-22-bk01_z.jpg"
  );
  await User.create(
    "Senator Simcha Felder",
    "1234",
    true,
    "Simcha",
    "Felder",
    "11230",
    "Advocating for tax reform and community values.",
    "Brooklyn",
    "New York",
    "https://cdn.cityandstateny.com/media/img/cd/2021/06/29/simcha_felder_mike_groll/route-fifty-lead-image.jpg?1627332782"
  );
  await User.create(
    "Senator Andrew Gounardes",
    "1234",
    true,
    "Andrew",
    "Gounardes",
    "11209",
    "Focused on transportation infrastructure and public safety.",
    "Brooklyn",
    "New York",
    "https://www.nysenate.gov/sites/default/files/styles/senator_hero/public/sd22ag-680x510-headerphoto.jpg?itok=Psj9gk27"
  );
  await User.create(
    "Senator Jessica Scarcella-Spanton",
    "1234",
    true,
    "Jessica",
    "Scarcella-Spanton",
    "11224",
    "Committed to healthcare access and affordable housing.",
    "Brooklyn",
    "New York",
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/%2803-08-23%29_NYS_Senator_Jessica_Scarcella-Spanton_%2852736712310%29_%28cropped%29.jpg"
  );
  await User.create(
    "Council Member Kalman Yeger",
    "1234",
    true,
    "Kalman",
    "Yeger",
    "11204",
    "Advocating for community development and public safety.",
    "Brooklyn",
    "New York",
    "https://council.nyc.gov/wp-content/uploads/sites/69/2018/01/kalman-yeger.jpg"
  );
  await User.create(
    "Council Member Farah Louis",
    "1234",
    true,
    "Farah",
    "Louis",
    "11203",
    "Fighting for women's rights and economic empowerment.",
    "Brooklyn",
    "New York",
    "https://images.squarespace-cdn.com/content/v1/5c5b1af411f78438e68f70d7/1550701275849-NR0Z9C099D9IT3HNB4Y5/image-asset.jpeg"
  );
  await User.create(
    "Council Member Mercedes Narcisse",
    "1234",
    true,
    "Mercedes",
    "Narcisse",
    "11234",
    "Dedicated to healthcare advocacy and senior citizen services.",
    "Brooklyn",
    "New York",
    "https://pbs.twimg.com/profile_images/1612457270251503618/T0DQTU7R_400x400.jpg"
  );
  await User.create(
    "Council Member Justin Brannan",
    "1234",
    true,
    "Justin",
    "Brannan",
    "11224",
    "Focused on arts and culture and community services.",
    "Brooklyn",
    "New York",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Justin_Brannan_headshot_Dec_2017.jpg"
  );
  await User.create(
    "Council Member Inna Vernikov",
    "1234",
    true,
    "Inna",
    "Vernikov",
    "11229",
    "Fighting for small businesses and public safety.",
    "Brooklyn",
    "New York",
    "https://cdn.cityandstateny.com/media/img/cd/2022/03/03/Inna_Vernikov_Courtesy_of_campaign/860x394.jpg"
  );

  await knex("posts").insert([
    {
      user_id: 1,
      heading: "Public Safety Town Hall",
      content:
        "Join us for a town hall meeting to discuss public safety initiatives in New York City.",
    },
    {
      user_id: 1,
      heading: "Summer Youth Employment Program",
      content:
        "Apply now for the Summer Youth Employment Program to gain valuable work experience.",
    },
    {
      user_id: 2,
      heading: "Brooklyn Book Festival",
      content:
        "Don't miss the Brooklyn Book Festival this weekend at Borough Hall Plaza.",
    },
    {
      user_id: 2,
      heading: "Community Board Meeting",
      content:
        "Attend our next community board meeting to share your ideas and concerns.",
    },
    {
      user_id: 3,
      heading: "Healthcare for All",
      content:
        "Support our push for universal healthcare to ensure every American has access to medical services.",
    },
    {
      user_id: 3,
      heading: "Infrastructure Funding",
      content:
        "Learn about the new infrastructure funding bill and how it will benefit New York.",
    },
    {
      user_id: 4,
      heading: "Women's Rights Rally",
      content: "Join us for a rally to support women's rights and equality.",
    },
    {
      user_id: 5,
      heading: "Criminal Justice Reform",
      content:
        "Join us in the fight for criminal justice reform to ensure fair treatment for all.",
    },
    {
      user_id: 6,
      heading: "Immigration Reform Meeting",
      content:
        "Discuss the latest updates on comprehensive immigration reform.",
    },
    {
      user_id: 7,
      heading: "Fiscal Responsibility Workshop",
      content:
        "Attend our workshop on fiscal responsibility and government transparency.",
    },
    {
      user_id: 8,
      heading: "Education Funding Initiative",
      content:
        "Learn about our latest initiatives to increase education funding.",
    },
    {
      user_id: 9,
      heading: "Public Health Awareness Campaign",
      content: "Join us in promoting public health and community safety.",
    },
    {
      user_id: 10,
      heading: "Small Business Saturday",
      content:
        "Support local businesses by participating in Small Business Saturday.",
    },
    {
      user_id: 11,
      heading: "Green Brooklyn Festival",
      content:
        "Celebrate and promote environmental protection at the Green Brooklyn Festival.",
    },
    {
      user_id: 12,
      heading: "Affordable Housing Seminar",
      content:
        "Learn about housing affordability initiatives and how you can benefit.",
    },
    {
      user_id: 13,
      heading: "Veterans' Rights Conference",
      content:
        "Attend our conference to support and advocate for veterans' rights.",
    },
    {
      user_id: 14,
      heading: "Tax Reform Roundtable",
      content:
        "Join our discussion on tax reform and its impact on the community.",
    },
    {
      user_id: 15,
      heading: "Transportation Safety Workshop",
      content:
        "Participate in our workshop on improving transportation safety.",
    },
    {
      user_id: 16,
      heading: "Healthcare Access Forum",
      content: "Discuss healthcare access issues and solutions at our forum.",
    },
    {
      user_id: 17,
      heading: "Community Development Meeting",
      content: "Share your ideas for community development and public safety.",
    },
    {
      user_id: 18,
      heading: "Economic Empowerment Summit",
      content:
        "Join us for a summit on women's rights and economic empowerment.",
    },
    {
      user_id: 19,
      heading: "Senior Citizen Services Fair",
      content:
        "Learn about services available for senior citizens at our fair.",
    },
    {
      user_id: 20,
      heading: "Arts and Culture Festival",
      content: "Celebrate arts and culture at our community festival.",
    },
    {
      user_id: 21,
      heading: "Small Business Advocacy Day",
      content: "Support small businesses by attending our advocacy day.",
    },
  ]);

  await knex("followers").insert([
    { follower_user_id: 1, followed_user_id: 2 },
    { follower_user_id: 1, followed_user_id: 3 },
    { follower_user_id: 2, followed_user_id: 1 },
    { follower_user_id: 2, followed_user_id: 3 },
    { follower_user_id: 3, followed_user_id: 1 },
    { follower_user_id: 3, followed_user_id: 2 },
    { follower_user_id: 4, followed_user_id: 5 },
    { follower_user_id: 4, followed_user_id: 6 },
    { follower_user_id: 5, followed_user_id: 4 },
    { follower_user_id: 5, followed_user_id: 6 },
    { follower_user_id: 6, followed_user_id: 4 },
    { follower_user_id: 6, followed_user_id: 5 },
    { follower_user_id: 7, followed_user_id: 8 },
    { follower_user_id: 7, followed_user_id: 9 },
    { follower_user_id: 8, followed_user_id: 7 },
    { follower_user_id: 8, followed_user_id: 9 },
    { follower_user_id: 9, followed_user_id: 7 },
    { follower_user_id: 9, followed_user_id: 8 },
    { follower_user_id: 10, followed_user_id: 11 },
    { follower_user_id: 10, followed_user_id: 12 },
    { follower_user_id: 11, followed_user_id: 10 },
    { follower_user_id: 11, followed_user_id: 12 },
    { follower_user_id: 12, followed_user_id: 10 },
    { follower_user_id: 12, followed_user_id: 11 },
    { follower_user_id: 13, followed_user_id: 14 },
    { follower_user_id: 13, followed_user_id: 15 },
    { follower_user_id: 14, followed_user_id: 13 },
    { follower_user_id: 14, followed_user_id: 15 },
    { follower_user_id: 15, followed_user_id: 13 },
    { follower_user_id: 15, followed_user_id: 14 },
    { follower_user_id: 16, followed_user_id: 17 },
    { follower_user_id: 16, followed_user_id: 18 },
    { follower_user_id: 17, followed_user_id: 16 },
    { follower_user_id: 17, followed_user_id: 18 },
    { follower_user_id: 18, followed_user_id: 16 },
    { follower_user_id: 18, followed_user_id: 17 },
    { follower_user_id: 19, followed_user_id: 20 },
    { follower_user_id: 19, followed_user_id: 21 },
    { follower_user_id: 20, followed_user_id: 19 },
    { follower_user_id: 20, followed_user_id: 21 },
    { follower_user_id: 21, followed_user_id: 19 },
    { follower_user_id: 21, followed_user_id: 20 },
  ]);

  const maria = await User.create(
    "maria_rodriguez",
    "1234",
    false,
    "Maria",
    "Rodriguez",
    "11201",
    "New York"
  );
  const james = await User.create(
    "james_okafor",
    "1234",
    false,
    "James",
    "Okafor",
    "11203",
    "New York"
  );
  const sarah = await User.create(
    "sarah_chen",
    "1234",
    false,
    "Sarah",
    "Chen",
    "10007",
    "New York"
  );
  const david = await User.create(
    "david_kim",
    "1234",
    false,
    "David",
    "Kim",
    "11209",
    "New York"
  );

  await knex("issues").insert([
    {
      user_id: maria.id,
      title: "Pothole on Atlantic Avenue",
      description:
        "Large pothole near the Bergen Street intersection causing tire damage and traffic slowdowns.",
      category: "infrastructure",
      status: "submitted",
      district: "Brooklyn CD-35",
    },
    {
      user_id: james.id,
      title: "Broken streetlight on Nostrand Avenue",
      description:
        "Streetlight has been out for three weeks, leaving the block poorly lit at night.",
      category: "safety",
      status: "in_progress",
      district: "Brooklyn CD-35",
    },
    {
      user_id: david.id,
      title: "Illegal dumping in Shore Parkway park",
      description:
        "Repeated illegal dumping of construction debris near the park entrance on 92nd Street.",
      category: "environment",
      status: "resolved",
      district: "Brooklyn CD-43",
    },
    {
      user_id: sarah.id,
      title: "Missing crosswalk at Chambers Street",
      description:
        "Pedestrians crossing between City Hall Park and the subway entrance have no marked crosswalk.",
      category: "safety",
      status: "submitted",
      district: "Manhattan CD-1",
    },
  ]);

  await knex("issue_responses").insert([
    {
      issue_id: 2,
      user_id: 2,
      body: "Thank you for reporting this. Our office has submitted a repair request to the Department of Transportation. Work is scheduled within the next two weeks.",
    },
    {
      issue_id: 3,
      user_id: 21,
      body: "Sanitation crews cleared the site on March 12. We are coordinating with NYPD on increased patrols to prevent recurrence.",
    },
  ]);
};
