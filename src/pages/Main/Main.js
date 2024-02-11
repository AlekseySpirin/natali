import React from 'react';
import {cn} from "@bem-react/classname";
import './Main.scss';
import CarouselPhoto from "../../components/CarouselPhoto/CarouselPhoto";
import {Typography} from "@mui/material";
import mainSlider from "../../data/dataImg/mainSlider.json";

const Main = () => {
	const mainCN = cn('Main');
	return (
		<main className={mainCN()}>
			<CarouselPhoto autoPlay={true} items={mainSlider} />
			<Typography className={mainCN('Title')}
			            variant="h5"
			            component="h2"
			>
				Добро пожаловать в гостевой дом "У Наталии",
				где каждый момент превращается в незабываемое приключение отдыха.
			</Typography>
			<Typography className={mainCN('Description')}
			            variant="body1"
			            component="p"
			            
			            
			>
				Расположенный в Черноморском районе Республики Крым, в живописном
				поселке Черноморское, на Тарханкутском полуострове, наш уютный дом
				предлагает идеальное сочетание чистого моря, прекрасных песчаных пляжей
				и впечатляющих скалистых берегов.
			</Typography>
			<Typography className={mainCN('Subtitle')}
			            variant={'h5'}>
				Инфраструктура:
			</Typography>
			<Typography className={mainCN('Description')}
				variant="body1"
				component="p"
				
				
			>
				На территории гостевого дома вас ждут уютные беседки со столиками,
				отдельные уголки для отдыха, мангал для гастрономических вечеров и
				детская площадка с разнообразными игрушками. В наличии три отдельные
				кухни со столовыми для самостоятельного приготовления пищи. На каждой
				кухне: газовые плиты, микроволновая печь, холодильники, необходимая
				посуда. В столовых создана атмосфера уюта с телевизорами, Wi-Fi и
				настольными играми, такими как шашки и шахматы.
				Возле дома предоставлена собственная освещенная бесплатная автостоянка
				для вашего комфорта.
			</Typography>
			<Typography className={mainCN('Subtitle')}
			            variant={'h5'}>
				Расположение:
			</Typography>
			<Typography className={mainCN('Description')}
				variant="body1"
				component="p"
				
			
			>
				Гостевой дом удачно расположен в центре поселка, с легким доступом к
				необходимой инфраструктуре: магазины, аптеки, банки, супермаркеты, такие
				как "Яблоко" и "Доброцен". Продуктовый рынок "Южный" (работает
				ежедневно), находится всего в 3 минутах ходьбы, а продуктовый рынок на
				площади (работает ежедневно), в 5-7 минутах ходьбы.
				Дорога до пляжа займет всего 5-7 минут, пролегая через городской парк
				развлечений и отдыха.
			</Typography>
			<Typography className={mainCN('Subtitle')}
			            variant={'h5'}>
				Развлечения и экскурсии:
			</Typography>
			<Typography className={mainCN('Description')}
				variant="body1"
				component="p"
				
			
			>
				Гостевой дом "У Наталии" станет отправной точкой для увлекательных
				экскурсий по всему Крыму. В период отдыха предлагаются посещения
				дельфинария, аквариума, городов Балаклавы и Севастополя, Южного берега
				Крыма, Херсонеса, ханского дворца в Бахчисарае, древнего города
				"Чуфут-кале" и Тарханкутского полуострова — самого чистого региона
				Крыма, доступного через туристическое агентство.
			</Typography>
			<Typography className={mainCN('Subtitle')}
			            variant={'h5'}>
				Групповые поездки:
			</Typography>
			<Typography className={mainCN('Description')}
				variant="body1"
				component="p"
				
				
			>
				Для наших гостей мы организовываем увлекательные групповые поездки на
				"Беляус", "Джангуль" и "Атлеш" ("Чаша любви").
			</Typography>
			<Typography className={mainCN('Subtitle')}
			            variant={'h5'}>
				Как добраться:
			</Typography>
			<Typography className={mainCN('Description')}
				variant="body1"
				component="p"
				
				
			>
				Всего в пятистах метрах от гостевого дома расположена автостанция.
			</Typography>
			<Typography className={mainCN('Description')}
				variant="body1"
				component="p"
				
			
			>
				На автобусе: Из Симферополя или Евпатории до Черноморского. Интервал
				движения из Евпатории составляет от 1 до 2 часов, время в пути от
				Симферополя – 3 часа 20 минут, из Евпатории – 1 час 20 минут. От
				автовокзала Черноморского до гостевого дома - всего 5 минут пешком.
			</Typography>
			<Typography className={mainCN('Description')}
				variant="body1"
				component="p"
				
		
			>
				На личном автомобиле: Из Симферополя - 2 часа, из Евпатории - 50 минут.
			</Typography>
			<Typography className={mainCN('Description')}
				variant="body1"
				component="p"
				
				
			>
				Встречаем на автовокзале пгт. Черноморское (бесплатно).
			</Typography>
			<Typography className={mainCN('Subtitle')}
			            variant={'h5'}>
				Трансфер (за отдельную плату):
			</Typography>
			<Typography className={mainCN('Description')}
				variant="body1"
				component="p"
				
			>
				Симферополь Ж/Д - Черноморское
			</Typography>
			<Typography className={mainCN('Description')}
				variant="body1"
				component="p"
				
			>
				Симферополь Аэропорт - Черноморское
			</Typography>
			<Typography className={mainCN('Description')}
				variant="body1"
				component="p"
				
			>
				Евпатория Ж/Д, Автовокзал - Черноморское
			</Typography>
			<Typography className={mainCN('Subtitle')}
			            variant={'h5'}>
				Предоставление дополнительного места в номере доступно за отдельную
				плату.
			</Typography>
			<Typography className={mainCN('Title',{fontSize: 'lg'})}
			            variant={'h5'}>
				Приятного отдыха!
			</Typography>
		</main>
	);
};

export default Main;
