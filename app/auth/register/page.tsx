import React from "react";
import Input from "../../../components/Input";
import Image from "next/image";
import Button from "../../../components/Button";
export default function Page() {
  return (
    <div className="flex place-content-center items-center h-screen">
      <div className="justify-between flex">
        <div className="px-28 py-24">
          <div className="font-bold text-4xl text-center mb-12">
            Create an account
          </div>
          <div className="mx-auto  ">
            <Input label="FIRST NAME" id="name" type="text"></Input>
            <Input label="LAST NAME" id="surname" type="text"></Input>
            <Input label="EMAIL" id="login" type="text"></Input>
            <Input label="REPEAT EMAIL" id="rep_login" type="text"></Input>
            <Input label="PASSWORD" id="password" type="password"></Input>
            <Input
              label="REPEAT PASSWORD"
              id="rep_password"
              type="password"
            ></Input>
            <div className="flex items-center -mt-12">
              <Button title="Continue" id="button"></Button>
            </div>
            <div className="flex justify-between">
              <div className="ml-1 mt-1 text-xs font-bold text-black">
                Already have an account?{" "}
                <a href="login" className="text-blue-600">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-28 ">
          <div className="bg-black w-1 h-full mx-auto "></div>
        </div>
        <div className="px-24 ">
          <div className="mt-24">
            <div>
              <svg
                width="192"
                height="190"
                viewBox="0 0 192 190"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mb-24 ml-96 -mr-24 "
              >
                <path
                  d="M181.185 189.256H10.291C7.56266 189.253 4.94689 188.168 3.01762 186.239C1.08835 184.31 0.00313637 181.694 0 178.966V56.1053C0.00308366 53.3771 1.0883 50.7615 3.01758 48.8324C4.94686 46.9032 7.56264 45.8181 10.291 45.815H181.185C183.914 45.8181 186.529 46.9033 188.459 48.8324C190.388 50.7616 191.473 53.3771 191.476 56.1053V178.966C191.473 181.694 190.388 184.31 188.458 186.239C186.529 188.168 183.914 189.253 181.185 189.256Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M13.45 181.053H178.026C179.349 181.053 180.619 180.527 181.554 179.592C182.49 178.656 183.016 177.387 183.016 176.064V59.0071C183.016 57.6839 182.49 56.4149 181.554 55.4792C180.619 54.5435 179.349 54.0179 178.026 54.0179H13.45C12.1267 54.0179 10.8575 54.5435 9.9218 55.4792C8.98607 56.4149 8.46039 57.6839 8.46039 59.0071V176.064C8.46039 177.387 8.98607 178.656 9.9218 179.592C10.8575 180.527 12.1267 181.053 13.45 181.053Z"
                  fill="white"
                />
                <path
                  d="M158.409 90.3897H53.2836C52.7906 90.3897 52.3023 90.4868 51.8468 90.6755C51.3913 90.8641 50.9774 91.1407 50.6288 91.4893C50.2801 91.8379 50.0036 92.2518 49.8149 92.7072C49.6262 93.1627 49.5291 93.6509 49.5291 94.1439C49.5291 94.6369 49.6262 95.1251 49.8149 95.5806C50.0036 96.0361 50.2801 96.4499 50.6288 96.7986C50.9774 97.1472 51.3913 97.4237 51.8468 97.6124C52.3023 97.801 52.7906 97.8981 53.2836 97.8981H158.409C159.405 97.8981 160.359 97.5026 161.064 96.7986C161.768 96.0945 162.163 95.1396 162.163 94.1439C162.163 93.1482 161.768 92.1933 161.064 91.4893C160.359 90.7852 159.405 90.3897 158.409 90.3897Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M53.2836 113.493C52.7906 113.493 52.3023 113.59 51.8468 113.778C51.3913 113.967 50.9774 114.243 50.6288 114.592C50.2801 114.941 50.0036 115.355 49.8149 115.81C49.6262 116.266 49.5291 116.754 49.5291 117.247C49.5291 117.74 49.6262 118.228 49.8149 118.683C50.0036 119.139 50.2801 119.553 50.6288 119.901C50.9774 120.25 51.3913 120.526 51.8468 120.715C52.3023 120.904 52.7906 121.001 53.2836 121.001H158.409C159.405 121.001 160.359 120.605 161.064 119.901C161.768 119.197 162.163 118.242 162.163 117.247C162.163 116.251 161.768 115.296 161.064 114.592C160.359 113.888 159.405 113.493 158.409 113.493H53.2836Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M53.2836 136.595C52.2879 136.595 51.3329 136.991 50.6288 137.695C49.9247 138.399 49.5291 139.354 49.5291 140.35C49.5291 141.345 49.9247 142.3 50.6288 143.004C51.3329 143.708 52.2879 144.104 53.2836 144.104H158.409C159.405 144.104 160.359 143.708 161.064 143.004C161.768 142.3 162.163 141.345 162.163 140.35C162.163 139.354 161.768 138.399 161.064 137.695C160.359 136.991 159.405 136.595 158.409 136.595H53.2836Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M33.3561 99.0533C35.9081 99.0533 37.9769 96.9846 37.9769 94.4327C37.9769 91.8808 35.9081 89.8121 33.3561 89.8121C30.804 89.8121 28.7352 91.8808 28.7352 94.4327C28.7352 96.9846 30.804 99.0533 33.3561 99.0533Z"
                  fill="#4D6CFA"
                />
                <path
                  d="M33.3561 122.156C35.9081 122.156 37.9769 120.087 37.9769 117.536C37.9769 114.984 35.9081 112.915 33.3561 112.915C30.804 112.915 28.7352 114.984 28.7352 117.536C28.7352 120.087 30.804 122.156 33.3561 122.156Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M33.3561 145.259C35.9081 145.259 37.9769 143.19 37.9769 140.638C37.9769 138.086 35.9081 136.018 33.3561 136.018C30.804 136.018 28.7352 138.086 28.7352 140.638C28.7352 143.19 30.804 145.259 33.3561 145.259Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M116.532 94.1439C116.532 94.6369 116.435 95.1251 116.246 95.5806C116.057 96.0361 115.781 96.4499 115.432 96.7985C115.084 97.1471 114.67 97.4237 114.214 97.6123C113.759 97.801 113.271 97.8981 112.778 97.8981H53.4189C52.4915 97.9117 51.5904 97.5898 50.8816 96.9916C50.1728 96.3934 49.704 95.5592 49.5617 94.6428C49.4916 94.1125 49.5355 93.5734 49.6904 93.0614C49.8453 92.5495 50.1077 92.0764 50.4599 91.6739C50.8122 91.2714 51.2463 90.9486 51.7332 90.7271C52.2201 90.5057 52.7487 90.3906 53.2836 90.3897H112.778C113.773 90.3897 114.728 90.7852 115.432 91.4893C116.136 92.1933 116.532 93.1482 116.532 94.1439Z"
                  fill="#4D6CFA"
                />
                <path
                  d="M95.738 30.0336C104.032 30.0336 110.756 23.3104 110.756 15.0168C110.756 6.72326 104.032 0 95.738 0C87.4439 0 80.7202 6.72326 80.7202 15.0168C80.7202 23.3104 87.4439 30.0336 95.738 30.0336Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M103.15 16.2195C103.814 12.1263 101.034 8.2696 96.9409 7.60536C92.8474 6.94112 88.9904 9.72085 88.3261 13.8141C87.6618 17.9073 90.4418 21.764 94.5353 22.4283C98.6288 23.0925 102.486 20.3127 103.15 16.2195Z"
                  fill="white"
                />
              </svg>

              <div className="py-24 font-bold text-4xl text-center mt-24">
                Lorem ipsum, sit amet dolores.
              </div>
              <svg
                width="192"
                height="190"
                viewBox="0 0 192 190"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mt-8 -ml-24"
              >
                <path
                  d="M181.185 189.058H10.291C7.56263 189.055 4.94685 187.97 3.01757 186.041C1.0883 184.112 0.00307438 181.496 -7.62939e-06 178.768V55.9076C0.00307273 53.1794 1.0883 50.5638 3.01757 48.6346C4.94685 46.7055 7.56263 45.6204 10.291 45.6173H181.185C183.913 45.6204 186.529 46.7055 188.458 48.6346C190.388 50.5638 191.473 53.1794 191.476 55.9076V178.768C191.473 181.496 190.388 184.112 188.458 186.041C186.529 187.97 183.913 189.055 181.185 189.058Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M13.4499 180.855H178.026C179.349 180.855 180.618 180.33 181.554 179.394C182.49 178.458 183.016 177.189 183.016 175.866V58.8093C183.016 57.4861 182.49 56.2171 181.554 55.2814C180.618 54.3457 179.349 53.8201 178.026 53.8201H13.4499C12.1266 53.8201 10.8575 54.3457 9.92173 55.2814C8.986 56.2171 8.46031 57.4861 8.46031 58.8093V175.866C8.46031 177.189 8.986 178.458 9.92173 179.394C10.8575 180.33 12.1266 180.855 13.4499 180.855Z"
                  fill="white"
                />
                <path
                  d="M25.6158 113.77C24.629 113.77 23.6827 114.162 22.9849 114.86C22.2871 115.558 21.8951 116.504 21.8951 117.491C21.8951 118.478 22.2871 119.424 22.9849 120.122C23.6827 120.82 24.629 121.211 25.6158 121.211H165.86C166.847 121.211 167.793 120.82 168.491 120.122C169.189 119.424 169.581 118.478 169.581 117.491C169.581 116.504 169.189 115.558 168.491 114.86C167.793 114.162 166.847 113.77 165.86 113.77H25.6158Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M25.6158 136.666C24.629 136.666 23.6827 137.058 22.9849 137.756C22.2871 138.453 21.8951 139.4 21.8951 140.386C21.8951 141.373 22.2871 142.319 22.9849 143.017C23.6827 143.715 24.629 144.107 25.6158 144.107H165.86C166.847 144.107 167.793 143.715 168.491 143.017C169.189 142.319 169.581 141.373 169.581 140.386C169.581 139.4 169.189 138.453 168.491 137.756C167.793 137.058 166.847 136.666 165.86 136.666H25.6158Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M88.2964 160.706C87.3096 160.706 86.3632 161.098 85.6655 161.796C84.9677 162.493 84.5757 163.44 84.5757 164.427C84.5757 165.413 84.9677 166.36 85.6655 167.057C86.3632 167.755 87.3096 168.147 88.2964 168.147H103.179C104.166 168.147 105.113 167.755 105.81 167.057C106.508 166.36 106.9 165.413 106.9 164.427C106.9 163.44 106.508 162.493 105.81 161.796C105.113 161.098 104.166 160.706 103.179 160.706H88.2964Z"
                  fill="#4D6CFA"
                />
                <path
                  d="M75.7947 66.5283C75.4912 66.5286 75.2002 66.6493 74.9855 66.864C74.7709 67.0786 74.6502 67.3696 74.6499 67.6731V96.7331C74.6502 97.0366 74.7709 97.3276 74.9855 97.5422C75.2002 97.7569 75.4912 97.8776 75.7947 97.8779H115.681C115.985 97.8776 116.276 97.7569 116.49 97.5422C116.705 97.3276 116.826 97.0366 116.826 96.7331V67.6731C116.826 67.3696 116.705 67.0786 116.49 66.8639C116.276 66.6493 115.985 66.5286 115.681 66.5283L75.7947 66.5283Z"
                  fill="#4D6CFA"
                />
                <path
                  d="M95.738 85.2854C99.2155 85.2854 102.035 82.4665 102.035 78.9891C102.035 75.5118 99.2155 72.6929 95.738 72.6929C92.2604 72.6929 89.4413 75.5118 89.4413 78.9891C89.4413 82.4665 92.2604 85.2854 95.738 85.2854Z"
                  fill="white"
                />
                <path
                  d="M106.042 95.0159C106.044 96.011 105.808 96.9922 105.355 97.8779H86.1212C85.6311 96.918 85.3956 95.8483 85.4374 94.7713C85.4791 93.6943 85.7967 92.6461 86.3597 91.727C86.9227 90.8079 87.7122 90.0487 88.6527 89.5222C89.5932 88.9956 90.6531 88.7193 91.731 88.7197H99.7449C101.414 88.7188 103.015 89.3809 104.196 90.5603C105.377 91.7397 106.041 93.3399 106.042 95.0088V95.0159Z"
                  fill="white"
                />
                <path
                  d="M95.738 85.2854C99.2155 85.2854 102.035 82.4665 102.035 78.9891C102.035 75.5118 99.2155 72.6929 95.738 72.6929C92.2604 72.6929 89.4413 75.5118 89.4413 78.9891C89.4413 82.4665 92.2604 85.2854 95.738 85.2854Z"
                  fill="white"
                />
                <path
                  d="M106.042 95.0159C106.044 96.011 105.808 96.9922 105.355 97.8779H86.1212C85.6311 96.918 85.3956 95.8483 85.4374 94.7713C85.4791 93.6943 85.7967 92.6461 86.3597 91.727C86.9227 90.8079 87.7122 90.0487 88.6527 89.5222C89.5932 88.9956 90.6531 88.7193 91.731 88.7197H99.7449C101.414 88.7188 103.015 89.3809 104.196 90.5603C105.377 91.7397 106.041 93.3399 106.042 95.0088V95.0159Z"
                  fill="white"
                />
                <path
                  d="M95.738 29.764C103.958 29.764 110.621 23.1011 110.621 14.882C110.621 6.6629 103.958 0 95.738 0C87.5183 0 80.8549 6.6629 80.8549 14.882C80.8549 23.1011 87.5183 29.764 95.738 29.764Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M95.7379 22.323C99.8478 22.323 103.179 18.9916 103.179 14.882C103.179 10.7725 99.8478 7.441 95.7379 7.441C91.6281 7.441 88.2964 10.7725 88.2964 14.882C88.2964 18.9916 91.6281 22.323 95.7379 22.323Z"
                  fill="#4D6CFA"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
