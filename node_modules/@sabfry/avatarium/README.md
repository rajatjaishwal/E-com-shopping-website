# Avatarium
[Avatarium Website](https://avatarium.siter.io/)

Meet Avatarium, your new favorite React package! This nifty tool is here to help you whip up awesome avatars on the fly. Our Avatar component makes it easy for you to give users an identity, without having to go through the trouble of profile picture uploads which need storage, monitoring, and constraints.  Use an avatar on:
* User profile pictures
* Comment sections
* Chat Interfaces
* Contact Lists
* And so much more!

## Key Features:
* Theme Customization: Users can select from predefined themes like 'space', 'blob', 'emoji', 'monster', and 'user'.
* Styling Options: Three predefined styles can be applied to the avatars, enhancing their visual appearance.
* Seed Functionality: Allows for deterministic results when a seed is provided and non-deterministic results when no seed is used.

## Installation

Install the component using [NPM:](https://www.npmjs.com/)

```bash
npm install @sabfry/avatarium
```

## Usage

1. Import Avatar
```javascript
import Avatar from '@sabfry/avatarium';
```

2. Use component in your project
```javascript
<Avatar theme='blob' seed={userId} />
```

3. Examples
```javascript
<Avatar theme='blob' seed={userId} />
<Avatar theme='space' style='style1' />
<Avatar theme='emoji' seed='style3' />
<Avatar theme='user' size='sm' border={true} />
<Avatar theme='blob' size='xl' border={true} borderShape='circle' borderColor='blue'/>
```

## Options

| Attribute  | Options  | Default  | Description  |   
|---|---|---|---|
|  theme | *string*   | none  | blob, emoji, monster, space, user, cutie   |   
| size  | *string*  |  sm | xs, sm, med, lg, xl | 
|  border | *boolean*   | false  |  if there's a border around the avatar |   
|  borderShape |  *string* | square  | cirlce, rounded, square. Note: won't do anything if border is false  |  
|  borderColor | *string*  | black  | color name, hex, or rgb. Note: won't do anything if border is false  |  
|  backgroundColor | *string*  | black  | color name, hex, or rgb.  | 
|  styleType | *string*  | none  | style1, style2, style3.  Predefined styles.  Other props won't affect the avatar if a style is chosen.  |  
|  seed | *number*  | random  | You can add a number so that the avatar is deterministic.  If left blank then the avatar will be random.  |  

## Style Examples

### Style 1
![Style 1](https://raw.githubusercontent.com/sfreifeld/avatarium/main/assets/style1.png)

### Style 2
![Style 2](https://raw.githubusercontent.com/sfreifeld/avatarium/main/assets/style2.png)

### Style 3
![Style 3](https://raw.githubusercontent.com/sfreifeld/avatarium/main/assets/style3.png)

### Unstyled
![Unstyled](https://raw.githubusercontent.com/sfreifeld/avatarium/main/assets/unstyled.png)

## In Use
![Example](https://raw.githubusercontent.com/sfreifeld/avatarium/main/assets/example.png)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Contributions
https://www.flaticon.com/packs/smiley-and-people-10
https://www.flaticon.com/packs/people-5
https://www.flaticon.com/packs/science-fiction-avatars-2
https://www.flaticon.com/packs/emoticon-29
https://www.flaticon.com/packs/monsters-2

