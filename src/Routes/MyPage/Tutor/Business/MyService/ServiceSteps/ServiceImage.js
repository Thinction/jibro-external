import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HalfBtnSet } from "../../../../../../Components/Buttons";
import { MdCancel, MdCameraAlt } from "react-icons/md";
import { PopupType2 } from "../../../../../../Components/Popup";

const Section = styled.div`
  padding: 0 16px;
  margin-bottom: 24px;
  :last-child {
    margin-bottom: 0;
  }
`;

const Theme = styled.div`
  ${(p) => p.theme.subTitle2};
  margin-bottom: 8px;
`;

const PhotoSection = styled.div`
  width: 100%;
  min-height: 84px;
  flex-wrap: wrap;
  display: flex;
  align-items: flex-end;
  margin-bottom: 24px;
`;

const PhotoWrap = styled.div`
  width: 84px;
  height: 84px;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-right: 12px;
`;

const IconWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  svg {
    pointer-events: none;
  }
`;

const Photo = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 8px;
  object-fit: cover;
  object-position: center;
`;

const AddPhotoBtn = styled.label`
  width: 72px;
  height: 72px;
  margin-top: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const GuideBox = styled.div`
  width: 328px;
  height: 58px;
  border-radius: 8px;
  background-color: #ede0f7;
  padding: 12px;
  ${(p) => p.theme.caption};
  word-break: break-all;
  color: #4708ae;
`;

const ServiceImage = ({
  service,
  serviceId,
  step,
  setStep,
  createServiceMutation,
  history,
}) => {
  const [imagesUrl, setImagesUrl] = useState(
    service?.images ? service.images : []
  );
  const [isOn, setIsOn] = useState(false);
  const [getImage, setGetImage] = useState([]);
  const [preview, setPreview] = useState([]);
  const readFileSync = (file) => {
    return new Promise((res, rej) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        res(reader.result);
      };
      reader.onerror = rej;
      reader.readAsDataURL(file);
    });
  };
  const onClick = (e) => {
    if (preview.length > 4) {
      e.preventDefault();
      alert("최대 5장의 사진만 가능합니다.");
      return;
    }
  };
  const onChange = async ({
    target: {
      files: [...file],
    },
  }) => {
    if (file.length > 5) {
      alert("최대 5장의 사진만 가능합니다.");
      return;
    }

    let newPreviewArr = [];
    await Promise.all(
      file.map(async (i) => {
        if (i.size > 1000000) {
          throw new Error("1MB 이상의 사진은 업로드 할 수 없습니다.");
        }
        const newFile = await readFileSync(i);
        // const reader = new FileReader();
        // reader.readAsDataURL(i);
        // reader.onloadend = () => {
        // setPreview([...preview, reader.result]);
        //   console.log(reader.result);
        newPreviewArr.push({ name: i.name, file: newFile });
        // };
      })
    )
      .then(() => {
        setPreview(preview.concat(newPreviewArr));
        setGetImage([...getImage, ...file]);
      })
      .catch((e) => alert(e));
  };
  const onRemove = (e) => {
    setPreview(
      preview.filter((item) => item.name !== e.target.getAttribute("name"))
    );
    setGetImage(
      getImage.filter((item) => item.name !== e.target.getAttribute("name"))
    );
  };
  const onRemoveUrl = (e) => {
    setImagesUrl(
      imagesUrl.filter((item) => item !== e.target.getAttribute("name"))
    );
  };
  const [allWritten, setAllWritten] = useState(false);
  useEffect(() => {
    if (imagesUrl.concat(getImage).length !== 0) {
      setAllWritten(true);
    } else {
      setAllWritten(false);
    }
  }, [getImage, imagesUrl]);

  return (
    <>
      <Section>
        <Theme>상세 이미지(5개까지)</Theme>
        <PhotoSection>
          {imagesUrl.length !== 0 &&
            imagesUrl.map((item, index) => {
              return (
                <PhotoWrap key={index}>
                  <IconWrap
                    name={item}
                    onClick={(e) => {
                      onRemoveUrl(e);
                    }}
                  >
                    <MdCancel size={24} color={"rgba(0, 0, 0, 0.6)"} />
                  </IconWrap>
                  <Photo src={item} />
                </PhotoWrap>
              );
            })}
          {preview.map((item, index) => {
            return (
              <PhotoWrap key={index}>
                <IconWrap
                  name={item.name}
                  onClick={(e) => {
                    onRemove(e);
                  }}
                >
                  <MdCancel size={24} color={"rgba(0, 0, 0, 0.6)"} />
                </IconWrap>
                <Photo src={item.file} />
              </PhotoWrap>
            );
          })}
          {getImage.length < 5 && (
            <>
              <AddPhotoBtn htmlFor="fileInput">
                <MdCameraAlt size={24} color={"rgba(0,0,0,.6"} />
              </AddPhotoBtn>
              <input
                id="fileInput"
                type="file"
                accept="image/jpeg, image/jpg, image/png"
                style={{ display: "none" }}
                onChange={onChange}
                onClick={onClick}
                multiple
              />
            </>
          )}
        </PhotoSection>
        <GuideBox>
          이미지 권장 사이즈: 652 X 488px (4:3비율)
          <br />
          1mb이하, jpg/png 파일만 등록 가능합니다.
        </GuideBox>
      </Section>
      <HalfBtnSet
        leftText={"이전"}
        leftBg={"#D7D7D7"}
        leftColor={"rgba(0, 0, 0, .6)"}
        onClickLeft={() => {
          setStep(6);
        }}
        rightText={"완료"}
        rightColor={"#fff"}
        onClickRight={() => setIsOn(true)}
        allWritten={allWritten}
        disabled={!allWritten}
      />
      {isOn && (
        <PopupType2
          cancel={true}
          onClickCancel={() => setIsOn(false)}
          onClickRemove={() => setIsOn(false)}
          children={
            service
              ? "서비스 수정을 완료하시겠습니까?"
              : "서비스 등록이 완료되면, 판매중 상태로 넘어가게됩니다. 서비스 등록을 완료하시겠습니까?"
          }
          rightBtnText={service ? "수정" : "등록"}
          onClick={async () => {
            await createServiceMutation({
              variables: {
                images: getImage,
                imagesUrl,
                step,
                serviceId,
                serviceState: "ForSale",
                done: true,
              },
            });
            history.go(-1);
          }}
        />
      )}
    </>
  );
};

export default ServiceImage;
